"use client";

import { PageWrapper } from "../components/PageWrapper";
import { useState, useEffect } from "react";
import styled from "styled-components";
import {
  carModels,
  defaultLocation,
  defaultYears,
  defaultModels,
  defaultSelectedCarModels,
  defaultCurrency,
  defaultFuel,
  defaultTransmition,
} from "../constants/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { api } from "./../http/backend";
import { cars } from "../http/db";

export const StyledFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;

  .field {
    display: flex;
    justify-content: center;
    padding: 8px;

    input {
      width: 40%;
      height: 40px;
    }

    select {
      width: 40%;
      height: 40px;
    }
  }
`;
//
// 1. Fetch all cars
// 2. Render all cars
// 3. when you click on car, you should create "carData" object and setCarData(carData)

export default function Admin() {
  const [disableModels, setDisableModels] = useState(true);
  const [selectedCarModels, setDefaultCarModels] = useState(
    defaultSelectedCarModels.filter((item) => item.selected)
  );
  const [cars, setCars] = useState([]);
  const [carData, setCarData] = useState({
    id: null,
    imageRef: "",
    price: "",
    millage: "",
    labels: "",
    type: carModels.find((item) => item.selected).name,
    location: defaultLocation.find((item) => item.selected).name,
    year: defaultYears.find((item) => item.selected).name,
    model: defaultModels.find((item) => item.selected).name,
    currency: defaultCurrency.find((item) => item.selected).name,
    fuel: defaultFuel.find((item) => item.selected).name,
    transmition: defaultTransmition.find((item) => item.selected).name,
  });

  const handleChange = (e) => {
    setCarData({
      ...carData,
      [e.target.name]: e.target.value,
    });
  };

  const saveCar = () => {
    if(!carData.id) {
      api
      .post("/api/cars", carData)
      .then((res) => console.log("response from server", res));
    } else {
      api
      .patch(`/api/cars/${carData.id}`, carData)
      .then((res) => console.log("response from server [Update]", res));
      // UPDATE
    }
  };

  useEffect(() => {
    api.get("/api/cars")
    .then((res) => setCars(res));
  }, []);

  const editCar = (car) => {

    setDefaultCarModels(
      defaultSelectedCarModels.filter((item) => car.madeBy === item.madeByKey)
    )
    setDisableModels(false)
    setCarData({
      id: car.id,
      imageRef: car.img,
      price: car.price,
      millage: car.milage,
      labels: car.labels.join(', '),
      carModel: car.madeBy,
      location: car.location,
      year: car.year,
      model: car.model,
      currency: car.currency,
      fuel: car.fuelType,
      transmition: car.transmition,
      type: car.type
    });
  };

  return (
    <PageWrapper>
      <div>Create Car</div>
      <StyledFormWrapper>
        <div className="field">
          <input
            value={carData.imageRef}
            type="text"
            placeholder="Image ref"
            name="imageRef"
            onChange={handleChange}
          />
        </div>
        <div className="field">
          <select name="type" onChange={handleChange}>
            {carModels.map((carModel, index) => (
              <option key={index} selected={carData.type === carModel.name}>
                {carModel.name}
              </option>
            ))}
          </select>
        </div>
        <div className="field">
          <select data-type="location" name="location" onChange={handleChange}>
            {defaultLocation.map((location, index) => (
              <option key={index} selected={carData.location === location.name}>
                {location.name}
              </option>
            ))}
          </select>
        </div>
        <div className="field">
          <select data-type="year" name="year" onChange={handleChange}>
            {defaultYears.map((year, index) => (
              <option key={index} selected={carData.year === year.value}>
                {year.name}
              </option>
            ))}
          </select>
        </div>

        <div className="field">
          <select
            data-type="carMadeBy"
            name="carMadeBy"
            onChange={(e) => {
              if (e.target.value === "---") {
                setDisableModels(true);
                setDefaultCarModels(
                  defaultSelectedCarModels.filter((item) => item.selected)
                );
              } else {
                setDisableModels(false);
                setDefaultCarModels(
                  defaultSelectedCarModels.filter(
                    (item) =>
                      item.madeByKey === e.target.value || item.name === "---"
                  )
                );
              }
              handleChange(e);
            }}
          >
            {defaultModels.map((model, index) => (
              <option key={index} selected={carData.carModel === model.name}>
                {model.name}
              </option>
            ))}
          </select>
        </div>
        <div className="field">
          <select
            data-type="model"
            name="model"
            disabled={disableModels}
            onChange={handleChange}
          >
            {selectedCarModels.map((model, index) => (
              <option key={index} selected={carData.model === model.name}>
                {model.name}
                {/* TODO */}
              </option>
            ))}
          </select>
        </div>
        <div className="field">
          <input
            value={carData.price}
            type="text"
            placeholder="Price"
            name="price"
            onChange={handleChange}
          />
        </div>
        <div className="field">
          <select data-type="currency" name="currency" onChange={handleChange}>
            {defaultCurrency.map((currency, index) => (
              <option key={index} selected={carData.currency === currency.name}>
                {currency.name}
              </option>
            ))}
          </select>
        </div>
        <div className="field">
          <select name="fuel" onChange={handleChange}>
            {defaultFuel.map((fuels, index) => (
              <option key={index} selected={carData.fuel === fuels.name}>
                {fuels.name}
              </option>
            ))}
          </select>
        </div>
        <div className="field">
          <input
            type="text"
            value={carData.millage}
            placeholder="Millage"
            name="millage"
            onChange={handleChange}
          />
        </div>
        <div className="field">
          <select name="transmition" onChange={handleChange}>
            {defaultTransmition.map((transmition, index) => (
              <option key={index} selected={carData.transmition === transmition.name}>
                {transmition.name}
              </option>
            ))}
          </select>
        </div>
        <div className="field">
          <input
            type="text"
            value={carData.labels}
            placeholder="Labels"
            name="labels"
            onChange={handleChange}
          />
        </div>

        <div className="field rounded-sm ">
          <button className="addCar " onClick={saveCar}>
            <FontAwesomeIcon icon={faPlus} />
            {
              carData.id ? 'Update' : 'Save'
            }
          </button>
        </div>
      </StyledFormWrapper>
      <div className="text-white ml-20 mt-20">Edit car</div>
      <div className="adminCarEdit">
        <div className="flex flex-wrap ml-40 gap-4 mb-20 mt-10">
          {cars.map((car, index) => (
            <div
              key={index}
              className="w-1/6 border p-4 rounded-lg dark-grey text-white "
              onClick={() => editCar(car)}
            >
              <img src={car.img} className="w-100 mb-2 rounded-lg" />
              <div className="text-md">
                {car.year} - {car.madeBy} {car.model}
              </div>
              <div className="text-md">
                {car.price} {car.currency}
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
}
