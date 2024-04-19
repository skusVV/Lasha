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

export default function Admin() {
  const [disableModels, setDisableModels] = useState(true);
  const [selectedCarModels, setDefaultCarModels] = useState(
    defaultSelectedCarModels.filter((item) => item.selected)
  );
  const [carData, setCarData] = useState({
    imageRef: "",
    carModel: "",
    location: "",
    year: "",
    price: "",
    currency: "",
    fuel: "",
    millage: "",
    transmition: "",
    labels: "",
  });

  // const [secondCar, setSecondCar] = useState([]);

  const [formData, setFormData] = useState([]);

  const handleChange = (e) => {
    // if (e.target.tagName === "INPUT") {
    //   console.log(`${e.target.placeholder}: ${e.target.value}`);
    // } else if (e.target.tagName === "SELECT") {
    //   const index = e.target.selectedIndex;
    //   const options = e.target.options;
    //   const name = options[index].text;
    //   console.log(`${name}: ${e.target.value}`);
    // }
    // const { name, value, placeholder } = e.target;
    // const newData = { [placeholder]: value };
    // setFormData((prevFormData) => [...prevFormData, newData]);
  };

  const logCar = () => {
    const formData = [];

    // Iterate over input elements
    document.querySelectorAll("input").forEach((input) => {
      formData.push({ [input.placeholder]: input.value });
    });

    // Iterate over select elements
    document.querySelectorAll("select").forEach((select) => {
      const type = select.getAttribute("data-type"); // Get the data-type attribute value
      const index = select.selectedIndex;
      const options = select.options;
      const name = options[index].text;
      formData.push({ [type]: select.value }); // Use the data-type as key
    });

    console.log(formData);
  };

  return (
    <PageWrapper>
      <div>Create Car</div>
      <StyledFormWrapper>
        <div className="field">
          <input type="text" placeholder="Image ref" />
        </div>
        <div className="field">
          <select data-type="carType" onChange={handleChange}>
            {carModels.map((carModel, index) => (
              <option key={index} selected={carModel.selected}>
                {carModel.name}
              </option>
            ))}
          </select>
        </div>
        <div className="field">
          <select data-type="location" onChange={handleChange}>
            {defaultLocation.map((location, index) => (
              <option key={index} selected={location.selected}>
                {location.name}
              </option>
            ))}
          </select>
        </div>
        <div className="field">
          <select data-type="year" onChange={handleChange}>
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
          <input type="text" placeholder="Price" onChange={handleChange} />
        </div>
        <div className="field">
          <select data-type="currency" onChange={handleChange}>
            {defaultCurrency.map((currency, index) => (
              <option key={index} selected={currency.selected}>
                {currency.name}
              </option>
            ))}
          </select>
        </div>
        <div className="field">
          <select data-type="fuel" onChange={handleChange}>
            {defaultFuel.map((fuels, index) => (
              <option key={index} selected={fuels.selected}>
                {fuels.name}
              </option>
            ))}
          </select>
        </div>
        <div className="field">
          <input type="text" placeholder="Millage" onChange={handleChange} />
        </div>
        <div className="field">
          <select data-type="transmition" onChange={handleChange}>
            {defaultTransmition.map((transmition, index) => (
              <option key={index} selected={transmition.selected}>
                {transmition.name}
              </option>
            ))}
          </select>
        </div>
        <div className="field">
          <input type="text" placeholder="Labels" onChange={handleChange} />
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
