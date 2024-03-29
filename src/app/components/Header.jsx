"use client";
import { useState } from "react";
import {
  carModels,
  defaultFuel,
  defaultCarPrices,
  defaultLocation,
  defaultModels,
  logo,
  defaultYears,
} from "../constants/constants";

export const Header = ({ onFilter, onClear }) => {
  const [models, setModels] = useState(defaultModels);
  const [prices, setPrices] = useState(defaultCarPrices);
  const [years, setYears] = useState(defaultYears);
  const [types, setType] = useState(carModels);
  const [locations, setLoaction] = useState(defaultLocation);
  const [fuels, setFuel] = useState(defaultFuel);
  const [searchTerm, setSearchTerm] = useState("");

  const onModelChange = (e) => {
    const newModels = models.map((model) => {
      if (model.name === e.target.value) {
        return { ...model, selected: true };
      }

      return { ...model, selected: false };
    });
    setModels(newModels);
  };

  const onPriceChange = (e) => {
    const newPrices = prices.map((price) => {
      if (price.name == e.target.value) {
        return { ...price, selected: true };
      }
      return { ...price, selected: false };
    });
    setPrices(newPrices);
  };

  const onYearChange = (e) => {
    const newYears = years.map((year) => {
      if (year.label == e.target.value) {
        return { ...year, selected: true };
      }
      return { ...year, selected: false };
    });
    setYears(newYears);
  };

  const onTypeChange = (e) => {
    const newType = carModels.map((type) => {
      if (type.name == e.target.value) {
        return { ...type, selected: true };
      } else {
        return { ...type, selected: false };
      }
    });
    setType(newType);
  };

  const onLocationChange = (e) => {
    const newLocation = defaultLocation.map((location) => {
      if (location.name == e.target.value) {
        return { ...location, selected: true };
      } else {
        return { ...location, selected: false };
      }
    });
    setLoaction(newLocation);
  };

  const onFuelChange = (e) => {
    console.log(fuels);
    const newFuel = defaultFuel.map((fuel) => {
      if (fuel.name == e.target.value) {
        return { ...fuel, selected: true };
      } else {
        return { ...fuel, selected: false };
      }
    });
    setFuel(newFuel);
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

  const onClickClear = () => {
    setModels(defaultModels);
    setPrices(defaultCarPrices);
    setYears(defaultYears);
    setType(carModels);
    setLoaction(defaultLocation);
    setFuel(defaultFuel);
    onClear();
  };

  const onSearch = (e) => {
    if (e.key === "Enter") {
      console.log("Search:", searchTerm);
      // TODO - If you will have time.
    }
  };

  return (
    <header>
      <div className="">
        <div className="container">
          <div className="container-left">
            <div className="search">
              <img src={logo} className="logo" />
              <i className="fa-solid fa-magnifying-glass" id="glass-icon"></i>
              <input
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={onSearch}
                value={searchTerm}
                type="search-box"
                name=""
                id=""
                className="search-box"
                placeholder="Search"
              />
            </div>
          </div>

          <div className="container-right">
            <div className="add-product">
              <i className="fas fa-plus"></i>
              <button className="add-item" id="top-button">
                Sell
              </button>
            </div>
            <div className="language">
              <i className="fas fa-globe"></i>
              <select action="" className="currency-change" id="top-button">
                <option value="">$ - USD</option>
                <option value="">₾ - GEL</option>
              </select>
            </div>
            <div className="log-in">
              <button className="Log-In" id="top-button">
                Log In
              </button>
            </div>
          </div>
        </div>

        <div className="nav-bar">
          <div className="nav-left">
            <button className="nav-buttons">clearance</button>
            <button className="nav-buttons">VIN check</button>
            <button className="nav-buttons">Dealers </button>
            <button className="nav-buttons">Car Showrooms</button>
            <button className="nav-buttons">Auctions</button>
            <button className="nav-buttons">Auto Parts</button>
            <button className="nav-buttons">Catalog</button>
            <button className="nav-buttons">Blog</button>
          </div>
          <div className="nav-right">
            <button className="nav-buttons">Help</button>
            <button className="nav-buttons">Contact</button>
          </div>
        </div>
      </div>
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
            onChange={onModelChange}
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
            onChange={onYearChange}
          >
            {years.map((year, index) => (
              <option key={index} selected={year.selected}>
                {year.label}
              </option>
            ))}
          </select>
          <select
            action=""
            className="model-change"
            id="top-button"
            onChange={onTypeChange}
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
            onChange={onPriceChange}
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
            onChange={onLocationChange}
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
            onChange={onFuelChange}
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
          <button onClick={onClickClear} className="filterButton">
            Clear
          </button>
        </div>
      </div>
    </header>
  );
};
