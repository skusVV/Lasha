"use client"
import { useState } from 'react';

const defaultModels = [
    {
        name: 'Audi',
        type: 'Car',
        selected: false
    },
    {
        name: 'BMW',
        type: 'Car',
        selected: true
    },
    {
        name: 'Totyota',
        type: 'Car',
        selected: false
    },
    {
        name: 'Mazda',
        type: 'Car',
        selected: false
    },
    {
        name: 'Ducati',
        type: 'Bike',
        selected: false
    }
]
const years = [];
for (let year = 2006; year <= 2024; year++) {
    years.push(year);
}
const carModels = ['Sedan', 'Hatchback', 'Jeep'];
const carPrices = ['0-5000', '5001-10000', '10001-15000', '15001-20000']
const location = ['Tbilis', 'Batumi', 'Outside Country', 'Space']
const carFuel = ['Petrol', 'Hybrid', 'Electric', 'Diesel']


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
                        <button className="add-item" id="top-button">Sell</button>
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
                  <button>Car</button>
                  <button>Motorcycle</button>
                  <button>Other</button>
              </div>
              <div className="specifications">
                  <select action="" className="model-change" id="top-button">
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
                  <select action="" className="year-change" id="top-button">
                    {years.map((year, index) => (
                        <option key={index}>{year}</option>
                    ))}
                  </select>
                  <select action="" className="model-change" id="top-button">
                    {carModels.map((carModels, index) => (
                        <option key={index}>{carModels}</option>
                    ))}
                  </select>
                  <select action="" className="price-change" id="top-button">
                    {carPrices.map((carPrices, index) => (
                        <option key={index}>{carPrices}</option>
                    ))}
                  </select>
                  <select action="" className="location-change" id="top-button">
                    {location.map((location, index) => (
                        <option key={index}>{location}</option>
                    ))}
                  </select>
                  <select action="" className="fuel-change" id="top-button">
                    {carFuel.map((carFuel, index) => (
                        <option key={index}>{carFuel}</option>
                    ))}
                  </select>
                  <button className='filterButton'>Filter</button>
              </div>
          </div>
      </header>
    )
}