"use client"
import { useState } from 'react';
import {carModels, carFuel, carPrices, location, defaultModels, logo, carPrice} from '../constants/constants';

const years = [];
for (let year = 2006; year <= 2024; year++) {
    years.push(year);
}

// const person = {
//     name: 'das',
//     age: 'das'
// };

// const { name } = person;
// const name = person.name;
// TODO Read about distructure


// TODO
// Refactor all selects by my example.
// the same you can do with buttons
export const Header = ({ onFilter, onClear }) => {
    const [models, setModels] = useState(defaultModels);
    const [prices, setPrices] = useState(carPrices)
    const [searchTerm, setSearchTerm] = useState('');

    const onModelChange = e => {
        const newModels = models.map(model => {
            if(model.name === e.target.value) {
                return { ...model, selected: true};
            }

            return { ...model, selected: false};
        });
        setModels(newModels);
    }

    const onPriceChange = (e) => {
        const newPrices = prices.map(price => {
            if (price.name == e.target.value) {
                return { ...price, selected: true };
            }
            return { ...price, selected: false };
        });
        setPrices(newPrices);
      }
      
    


    const onClickSearch = () => {
        const model = models.find(item => item.selected === true).name;
        const price = prices.find(item => item.selected === true).name;
        onFilter({ model: model});
        onFilter({ price: price})
    }

    const onClickClear = () => {
        setModels(defaultModels);
        setPrices(carPrices)
        onClear();
    }

    const onSearch = (e) => {
        if(e.key === 'Enter') {
            console.log('Search:', searchTerm);
            // TODO - If you will have time.
        }
      
    }


    return (
        <header>
        <div>
            <div className="container">
                <div className="container-left">
                    <div className="search">
                        <img src={logo} className='logo'/>
                        <i className="fa-solid fa-magnifying-glass" id="glass-icon"></i>
                        <input onChange={(e) => setSearchTerm(e.target.value)} onKeyDown={onSearch} value={searchTerm} type="search-box" name="" id="" className="search-box" placeholder="Search" />
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
                            <option value="">$ - USD</option>
                            <option value="">₾ - GEL</option>
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
                  <select action="" className="model-change" id="top-button" onChange={onModelChange}>
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
                  <select action="" className="price-change" id="top-button" onChange={onPriceChange}>
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
                  <button onClick={onClickSearch} className='filterButton'>Filter</button>
                  <button onClick={onClickClear} className='filterButton'>Clear</button>
              </div>
          </div>
      </header>
    )
}