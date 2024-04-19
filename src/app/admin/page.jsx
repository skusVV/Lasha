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
  const [carData, setCarData] = useState({
    imageRef: "",
    price: "",
    millage: "",
    labels: "",
    carModel: carModels.find(item => item.selected).name,
    location: defaultLocation.find(item => item.selected).name,
    year:  defaultYears.find(item => item.selected).name,
    model: defaultModels.find(item => item.selected).name,
    currency: defaultCurrency.find(item => item.selected).name,
    fuel: defaultFuel.find(item => item.selected).name,
    transmition: defaultTransmition.find(item => item.selected).name,
  });

  const handleChange = (e) => {
    setCarData({
      ...carData,
      [e.target.name]: e.target.value
    });
  };

  const logCar = () => { // Rename to save
    api.post('/api/cars', carData)
    .then(res => console.log('response from server', res))
  };

  return (
    <PageWrapper>
      <div>Create Car</div>
      <div>
        <div>car 1 </div>
        <div>car 2 </div>
        <div>car 3 </div>
        <div>car 4 </div>
      </div>
      <StyledFormWrapper>
        <div className="field">
          <input type="text" placeholder="Image ref" name="imageRef" onChange={handleChange}/>
        </div>
        <div className="field">
          <select data-type="carType" name="carModel" onChange={handleChange}>
            {carModels.map((carModel, index) => (
              <option key={index} selected={carModel.selected}>
                {carModel.name}
              </option>
            ))}
          </select>
        </div>
        <div className="field">
          <select data-type="location" name="location" onChange={handleChange}>
            {defaultLocation.map((location, index) => (
              <option key={index} selected={location.selected}>
                {location.name}
              </option>
            ))}
          </select>
        </div>
        <div className="field">
          <select data-type="year" name="year" onChange={handleChange}>
            {defaultYears.map((year, index) => (
              <option key={index} selected={year.selected}>
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
              <option key={index} selected={model.selected}>
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
              <option key={index} selected={model.selected}>
                {model.name}
              </option>
            ))}
          </select>
        </div>
        <div className="field">
          <input type="text" placeholder="Price" name="price" onChange={handleChange} />
        </div>
        <div className="field">
          <select data-type="currency" name="currency" onChange={handleChange}>
            {defaultCurrency.map((currency, index) => (
              <option key={index} selected={currency.selected}>
                {currency.name}
              </option>
            ))}
          </select>
        </div>
        <div className="field">
          <select name="fuel" onChange={handleChange}>
            {defaultFuel.map((fuels, index) => (
              <option key={index} selected={fuels.selected}>
                {fuels.name}
              </option>
            ))}
          </select>
        </div>
        <div className="field">
          <input type="text" placeholder="Millage" name="millage" onChange={handleChange} />
        </div>
        <div className="field">
          <select name="transmition" onChange={handleChange}>
            {defaultTransmition.map((transmition, index) => (
              <option key={index} selected={transmition.selected}>
                {transmition.name}
              </option>
            ))}
          </select>
        </div>
        <div className="field">
          <input type="text" placeholder="Labels" name="labels" onChange={handleChange} />
        </div>

        <div className="field rounded-sm">
          <FontAwesomeIcon icon={faPlus} />
          <button className="addCar" onClick={logCar}>
            Add Car
          </button>
        </div>
      </StyledFormWrapper>
    </PageWrapper>
  );
}
