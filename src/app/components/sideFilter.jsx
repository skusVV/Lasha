"use client";

import { useState } from "react";
import {
  carModels,
  defaultFuel,
  defaultCarPrices,
  defaultLocation,
  defaultModels,
  defaultYears,
} from "../constants/constants";
import {
  faCar,
  faMotorcycle,
  faTractor,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const selectMapper = (item, e) => {
  if (item.name === e.target.value) {
    return { ...item, selected: true };
  }

  return { ...item, selected: false };
};

export const SideFilter = ({ onFilter }) => {
  const [models, setModels] = useState(defaultModels);
  const [prices, setPrices] = useState(defaultCarPrices);
  const [years, setYears] = useState(defaultYears);
  const [types, setType] = useState(carModels);
  const [locations, setLoaction] = useState(defaultLocation);
  const [fuels, setFuel] = useState(defaultFuel);

  const onSelectChange = (e, items, setFunction) => {
    const newItems = items.map((item) => selectMapper(item, e));
    setFunction(newItems);
  };

  const onClickSearch = () => {
    const model = models.find((item) => item.selected === true).name;
    const price = prices.find((item) => item.selected === true);
    const year = years.find((item) => item.selected === true).value;
    const type = types.find((item) => item.selected === true).name;
    const location = locations.find((item) => item.selected === true).name;
    const fuel = fuels.find((item) => item.selected === true).name;
    onFilter({
      model: model,
      price: {
        min: price.minValue,
        max: price.maxValue,
      },
      year: year,
      type: type,
      location: location,
      fuel: fuel,
    });
  };

  return (
    <section>
      <div>
        <div className="side-container-left">
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
            integrity="sha512-BqNTGwGTT+/pL+wgNf4RbH2KZKTD9jLxjeuItx/i8QQwSbZbA5B0w8UogBMT/GQHw5IcAd7xjfA9OhFvuL3Vaw=="
            crossorigin="anonymous"
            referrerpolicy="no-referrer"
          />
          <div className="side-detailed-search">
            <div className="">
              <button>
                <FontAwesomeIcon icon={faCar} />
              </button>
              <button>
                <FontAwesomeIcon icon={faMotorcycle} />
              </button>
              <button>
                <FontAwesomeIcon icon={faTractor} />
              </button>
            </div>
            <div className="side-specifications">
              <div className="side-selects">
                <select
                  action=""
                  className="model-change"
                  id="top-button"
                  onChange={(e) => onSelectChange(e, models, setModels)}
                >
                  {models.map((model, index) => {
                    return (
                      <option htmlFor="" key={index} selected={model.selected}>
                        {model.name}
                      </option>
                    );
                  })}
                </select>
                <select
                  action=""
                  className="year-change"
                  id="top-button"
                  onChange={(e) => onSelectChange(e, years, setYears)}
                >
                  {years.map((year, index) => (
                    <option key={index} selected={year.selected}>
                      {year.name}
                    </option>
                  ))}
                </select>
                <select
                  action=""
                  className="model-change"
                  id="top-button"
                  onChange={(e) => onSelectChange(e, carModels, setType)}
                >
                  {carModels.map((carModel, index) => (
                    <option key={index} selected={carModel.selected}>
                      {carModel.name}
                    </option>
                  ))}
                </select>
                <select
                  action=""
                  className="price-change"
                  id="top-button"
                  onChange={(e) => onSelectChange(e, prices, setPrices)}
                >
                  {prices.map((carPrice, index) => (
                    <option key={index} selected={carPrice.selected}>
                      {carPrice.name}
                    </option>
                  ))}
                </select>
                <select
                  action=""
                  className="location-change"
                  id="top-button"
                  onChange={(e) =>
                    onSelectChange(e, defaultLocation, setLoaction)
                  }
                >
                  {locations.map((location, index) => (
                    <option key={index} selected={location.selected}>
                      {location.name}
                    </option>
                  ))}
                </select>
                <select
                  action=""
                  className="fuel-change"
                  id="top-button"
                  onChange={(e) => onSelectChange(e, defaultFuel, setFuel)}
                >
                  {defaultFuel.map((fuel, index) => (
                    <option key={index} selected={fuel.selected}>
                      {fuel.name}
                    </option>
                  ))}
                </select>
              </div>
              <button onClick={onClickSearch} className="filterButton">
                Filter
              </button>
            </div>
          </div>
        </div>
        <div className="side-container-right"></div>
      </div>
    </section>
  );
};
