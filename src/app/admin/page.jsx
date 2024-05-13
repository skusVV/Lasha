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
  defaultExteriorColor,
  defaultLiters,
  defaultDoors,
  defaultWheel,
  defaultInteriorColor,
  defaultInteriorMaterial,
  defaultTechInspection,
  defaultAccident,
} from "../constants/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { validateForm } from "./validation";
import { useRouter } from "next/navigation";

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
// Validation
// 1. Fields not empty

export default function Admin() {
  const user = JSON.parse(localStorage.getItem("AUTH"));
  const router = useRouter();

  const [disableModels, setDisableModels] = useState(true);
  const [selectedCarModels, setDefaultCarModels] = useState(
    defaultSelectedCarModels.filter((item) => item.selected)
  );
  const [cars, setCars] = useState([]);
  const [carData, setCarData] = useState({
    id: null,
    imageRef: "",
    description: "",
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
    exterior: defaultExteriorColor.find((item) => item.selected).name,
    liters: defaultLiters.find((item) => item.selected).name,
    doors: defaultDoors.find((item) => item.selected).name,
    wheel: defaultWheel.find((item) => item.selected).name,
    interiorColor: defaultInteriorColor.find((item) => item.selected).name,
    interiorMaterial: defaultInteriorMaterial.find((item) => item.selected)
      .name,
    techInspection: defaultTechInspection.find((item) => item.selected).name,
    accidents: defaultAccident.find((item) => item.selected).name,
  });

  const handleChange = (e) => {
    setCarData({
      ...carData,
      [e.target.name]: e.target.value,
    });
  };

  const saveCar = () => {
    const messages = validateForm(carData);

    if (messages.length) {
      return alert(messages.join(" \n"));
    }

    if (!carData.id) {
      fetch(`http://localhost:3001/api/cars?userId=${user.id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(carData),
      })
        .then((res) => res.json())
        .then((res) => console.log("response from server", res));
    } else {
      fetch(`http://localhost:3001/api/cars/${carData.id}?userId=${user.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(carData),
      })
        .then((res) => res.json())
        .then((res) => {
          setCars(res);
        });
    }
  };

  useEffect(() => {
    fetch(`http://localhost:3001/api/cars?userId=${user.id}`)
      .then((res) => res.json())
      .then((res) => setCars(res));
  }, []);

  const editCar = (car) => {
    setDefaultCarModels(
      defaultSelectedCarModels.filter((item) => car.madeBy === item.madeByKey)
    );
    setDisableModels(false);
    setCarData({
      id: car.id,
      imageRef: car.img,
      description: car.description,
      price: car.price,
      millage: car.milage,
      labels: car.labels.join(", "),
      carModel: car.madeBy,
      location: car.location,
      year: car.year,
      model: car.model,
      currency: car.currency,
      fuel: car.fuelType,
      transmition: car.transmition,
      type: car.type,
      exterior: car.exterior,
      liters: car.liters,
      doors: car.doors,
      wheel: car.wheel,
      interiorColor: car.interiorColor,
      techInspection: car.techInspection,
      accidents: car.accidents,
    });
  };

  const deleteCar = () => {
    if (
      !window.confirm(
        `Are you sure you want to delete ${carData.carModel} ${carData.model}?`
      )
    ) {
      return;
    }

    fetch(`http://localhost:3001/api/cars/${carData.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      const newCars = cars.filter((car) => {
        if (car.id === carData.id) {
          return false;
        } else {
          return true;
        }
      });

      setCars(newCars);
    });
  };

  if (!user) {
    router.push("/");
    return null;
  }

  return (
    <PageWrapper>
      <div>Create Car</div>
      <StyledFormWrapper>
        <div className="flex justify-between mt-[50px]">
          <div className="addCarLeft w-1/2">
            <div className="field">
              <input
                className="rounded-md"
                value={carData.imageRef}
                type="text"
                placeholder="  Image ref"
                name="imageRef"
                onChange={handleChange}
                required
              />
              {carData.imageRef && (
                <img
                  src={carData.imageRef}
                  alt="Image Preview"
                  style={{
                    maxWidth: "500px",
                    maxHeight: "500px",
                    position: "absolute",
                    top: "400px",
                    left: "80px",
                  }}
                />
              )}
            </div>
          </div>
          <div className="addCarRight w-1/2">
            <div className="field">
              <div className="align-center w-[600px] content-start space-between space-x-8">
                <select
                  className="rounded-md w-[50px]"
                  data-type="carMadeBy"
                  name="carMadeBy"
                  required
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
                            item.madeByKey === e.target.value ||
                            item.name === "---"
                        )
                      );
                    }
                    handleChange(e);
                  }}
                >
                  {defaultModels.map((model, index) => (
                    <option
                      key={index}
                      selected={carData.carModel === model.name}
                    >
                      {model.name}
                    </option>
                  ))}
                </select>
                <select
                  className="rounded-md"
                  data-type="model"
                  name="model"
                  disabled={disableModels}
                  onChange={handleChange}
                  required
                >
                  {selectedCarModels.map((model, index) => (
                    <option key={index} selected={carData.model === model.name}>
                      {model.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="field">
              <div className="align-center w-[600px] content-start space-between space-x-8">
                <select
                  name="type"
                  onChange={handleChange}
                  className="rounded-md"
                  required
                >
                  {carModels.map((carModel, index) => (
                    <option
                      key={index}
                      selected={carData.type === carModel.name}
                    >
                      {carModel.name}
                    </option>
                  ))}
                </select>
                <select
                  className="rounded-md"
                  data-type="year"
                  name="year"
                  onChange={handleChange}
                  required
                >
                  {defaultYears.map((year, index) => (
                    <option key={index} selected={carData.year === year.value}>
                      {year.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="field">
              <div className="align-center w-[600px] content-start space-between space-x-8">
                <input
                  className="rounded-md"
                  type="number"
                  value={carData.millage}
                  placeholder="Millage"
                  name="millage"
                  onChange={handleChange}
                  required
                />
                <select
                  data-type="location"
                  name="location"
                  className="rounded-md"
                  onChange={handleChange}
                  required
                >
                  {defaultLocation.map((location, index) => (
                    <option
                      key={index}
                      selected={carData.location === location.name}
                    >
                      {location.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="field">
              <div className="align-center w-[600px] content-start space-between space-x-8">
                <select
                  className="rounded-md"
                  data-type="Ecterior"
                  name="exterior"
                  onChange={handleChange}
                  required
                >
                  {defaultExteriorColor.map((exterior, index) => (
                    <option
                      key={index}
                      selected={carData.exterior === exterior.name}
                    >
                      {exterior.name}
                    </option>
                  ))}
                </select>
                <select
                  className="rounded-md"
                  data-type="year"
                  name="year"
                  onChange={handleChange}
                  required
                >
                  {defaultYears.map((year, index) => (
                    <option key={index} selected={carData.year === year.value}>
                      {year.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="field">
              <div className="align-center w-[600px] content-start space-between space-x-8">
                <select
                  name="transmition"
                  className="rounded-md"
                  onChange={handleChange}
                  required
                >
                  {defaultTransmition.map((transmition, index) => (
                    <option
                      key={index}
                      selected={carData.transmition === transmition.name}
                    >
                      {transmition.name}
                    </option>
                  ))}
                </select>
                <select
                  name="fuel"
                  className="rounded-md"
                  onChange={handleChange}
                  required
                >
                  {defaultFuel.map((fuels, index) => (
                    <option key={index} selected={carData.fuel === fuels.name}>
                      {fuels.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="field">
              <div className="align-center w-[600px] content-start space-x-8">
                <input
                  className="rounded-md w-[300px]"
                  value={carData.price}
                  type="number"
                  placeholder="Price"
                  name="price"
                  onChange={handleChange}
                  required
                />
                <select
                  className="rounded-md"
                  data-type="currency"
                  name="currency"
                  onChange={handleChange}
                  required
                >
                  {defaultCurrency.map((currency, index) => (
                    <option
                      key={index}
                      selected={carData.currency === currency.name}
                    >
                      {currency.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="field">
              <input
                className="rounded-md w-[600]"
                type="text"
                value={carData.labels}
                placeholder="[Optional] Labels"
                name="labels"
                onChange={handleChange}
              />{" "}
            </div>
            <div className="field">
              <input
                className="rounded-md"
                value={carData.description}
                type="text"
                placeholder="description"
                name="description"
                onChange={handleChange}
                required
              />
            </div>

            <div className="field rounded-sm ">
              <button className="addCar " onClick={saveCar}>
                <FontAwesomeIcon icon={faPlus} />
                {carData.id ? "Update" : "Save"}
              </button>

              {carData.id && (
                <button className="addCar " onClick={deleteCar}>
                  <FontAwesomeIcon icon={faPlus} />
                  Delete
                </button>
              )}
            </div>
          </div>
        </div>
      </StyledFormWrapper>
      <div className="text-white ml-20 mt-20">Edit car</div>
      <div className="adminCarEdit">
        <div className="flex flex-wrap ml-40 gap-4 mb-20 mt-10">
          {cars.map((car, index) => (
            <div
              key={index}
              className={`w-1/6 border p-4 rounded-lg dark-grey text-white ${
                car.id === carData.id ? "selected-car-sell-button" : ""
              }`}
              onClick={() => editCar(car)}
            >
              <img src={car.img} className="w-100  mb-2 rounded-lg" />
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
