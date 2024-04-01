"use client";
// import {cars} from '../../constants/constants';
import { useState, useEffect } from "react";
import { api } from "../..//http/backend";
import { Header } from "../../components/Header";
import { logo } from "../../constants/constants";

export default function CarDetails({ params }) {
  const [car, setCar] = useState({});
  // Implement set Car
  // const car = cars.find(item => item.id === Number(params.id));
  // console.log(car)
  useEffect(() => {
    // Component did Mount
    api.get(`/api/cars/${params.id}`).then((res) => {
      setCar(res);
    });
  }, []);

  return (
    <div>
      <div className="container">
        <div className="container-left">
          <div className="search">
            <a href=".././Header.jsx">
              <img src={logo} className="logo" />
            </a>
            <i className="fa-solid fa-magnifying-glass" id="glass-icon"></i>
            <input
              onChange={(e) => setSearchTerm(e.target.value)}
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

      <div className="flex justify-center mt-20">
        <div className="selected-car-container dark-grey p-4 rounded-lg">
          <div className="flex items-center">
            <div className="selected-car-container-left">
              <img
                src={car.img}
                className="max-h-96 max-w-100 rounded-lg mr-20 mt-10 ml-6 mb-10"
                alt="Car"
              />
            </div>
            <div className="selected-car-container-right">
              <div className="selected-car-info">
                CAR with ID: {params.id}
                <div className="selected-car-details">
                  <div className="selected-car-year font-bold text-white">
                    {car.year}
                  </div>
                  <hr className=" mt-3 mb-3 border-white w-20" />
                  <div className="selected-car-madeBy mb-10 font-bold text-white">
                    {car.madeBy} {car.model}
                  </div>
                  <div className="selected-car-price text-white">
                    {car.price} {car.currency}
                  </div>
                  <div className="selected-car-card-city text-white">
                    {car.location}
                  </div>
                </div>
                <div className="selected-car-sell-button rounded-lg mt-20 text-white">
                  <button className="ml-2 mr-2">Contact Seller</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
