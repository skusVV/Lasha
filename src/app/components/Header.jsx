"use client"
import { useState } from 'react';

const defaultModels = [
    {
        name: 'Audi',
        selected: false
    },
    {
        name: 'BMW',
        selected: true
    },
    {
        name: 'Totyota',
        selected: false
    }
]
// TODO
// Refactor all selects by my example.
// the same you can do with buttons
export const Header = () => {
    const [models, setModels] = useState(defaultModels);

    return (
        <header>
        <div>
            <div className="container">
                <div className="container-left">
                    <div className="search">
                        <img src="logo.png" className="logo" alt="" />
                        <i className="fa-solid fa-magnifying-glass" id="glass-icon"></i>
                        <input type="search-box" name="" id="" className="search-box" placeholder="Search" />
                    </div>
                </div>

                <div className="container-right">
                    <div className="add-product">
                        <i className="fas fa-plus"></i>
                        <button className="add-item" id="top-button">Add Product</button>
                    </div>
                    <div className="language">
                        <i className="fas fa-globe"></i>
                        <select action="" className="currency-change" id="top-button">
                            <option htmlFor="">Georgian</option>
                            <option htmlFor="">English</option>
                            <option htmlFor="">USD - $</option>
                            <option htmlFor="">GEL - ₾</option>
                        </select>
                    </div>
                    <div className="log-in">
                        <button className="Log-In" id="top-button">Log In</button>
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
                  <button>Automobile</button>
                  <button>Motorcycle</button>
                  <button>Other</button>
              </div>
              <div className="specifications">
                  <select action="" className="currency-change" id="top-button">
                    {
                        models.map((model, index) => {
                            return (
                                <option htmlFor=""
                                 key={index} 
                                 selected={model.selected}>
                                    {model.name}
                                </option>
                            )
                        })
                    }
                  </select>
                  <select action="" className="currency-change" id="top-button">
                      <option htmlFor="">2024</option>
                      <option htmlFor="">2023</option>
                      <option htmlFor="">2022</option>
                      <option htmlFor="">2021</option>
                  </select>
                  <select action="" className="currency-change" id="top-button">
                      <option htmlFor="">Sedan</option>
                      <option htmlFor="">Hatchback</option>
                      <option htmlFor="">idk any else</option>
                      <option htmlFor="">Jeep or smth</option>
                  </select>
                  <select action="" className="currency-change" id="top-button">
                      <option htmlFor="">0-5000</option>
                      <option htmlFor="">5001-10000</option> 
                  </select>
                  <select action="" className="currency-change" id="top-button">
                      <option htmlFor="">Tbilisi</option>
                      <option htmlFor="">Batumi</option>
                      <option htmlFor="">Outside Country</option>
                      <option htmlFor="">Space</option>
                  </select>
                  <select action="" className="currency-change" id="top-button">
                      <option htmlFor="">Petrol</option>
                      <option htmlFor="">Diesel</option>
                      <option htmlFor="">Electric</option>
                      <option htmlFor="">Space</option>
                  </select>
                  <button>Filter</button>
              </div>
          </div>
      </header>
    )
}