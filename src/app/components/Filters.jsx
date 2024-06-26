"use client";
import { useState, useEffect } from "react";
import {
  carModels,
  defaultFuel,
  defaultCarPrices,
  defaultLocation,
  defaultYears,
} from "../constants/constants";

const selectMapper = (item, e) => {
  if (item.name === e.target.value) {
    return { ...item, selected: true };
  }

  return { ...item, selected: false };
};

export const Filters = ({ onFilter }) => {
  const [models, setModels] = useState([]);
  const [prices, setPrices] = useState(defaultCarPrices);
  const [years, setYears] = useState(defaultYears);
  const [types, setType] = useState(carModels);
  const [locations, setLoaction] = useState([]);
  const [fuels, setFuel] = useState(defaultFuel);

  useEffect(() => {
    fetch(`http://localhost:3001/api/car-attributes/manufacturer`)
      .then((res) => res.json())
      .then((res) => {
        setModels(res)
      });

    fetch(`http://localhost:3001/api/car-attributes/locations`)
      .then((res) => res.json())
      .then((res) => {
        setLoaction(res)
      });
  }, [])

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
      <div className="detailed-search">
        <div className="outside-vehicle">
          <button>Car</button>
          <button>Motorcycle</button>
          <button>Other</button>
        </div>
        <div className="specifications">
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
            onChange={(e) => onSelectChange(e, defaultLocation, setLoaction)}
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
          <button onClick={onClickSearch} className="filterButton">
            Filter
          </button>
        </div>
      </div>
    </section>
  );
};
