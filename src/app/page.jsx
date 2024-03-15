import {renderCar} from './components/car';


const cars = [
  {
    img: 'https://static.my.ge/myauto/photos/1/8/5/2/1/thumbs/101125811_1.jpg?v=6',
    city: 'Tbilisi',
    year: 2017,
    madeBy: 'Kia',
    model: 'Sedona',
    price: 30800,
    currency: '$',
    labels: ['Minivan', 'Petrol']
  },
  {
    img: 'https://static.my.ge/myauto/photos/3/0/8/3/1/thumbs/102138035_1.jpg?v=1',
    city: 'On a way',
    year: 2014,
    madeBy: 'Toyota',
    model: 'Prius',
    price: 17300,
    currency: '$',
    labels: ['Sedan', 'Hybrid']
  },
  {
    img: 'https://static.my.ge/myauto/photos/1/8/5/2/1/thumbs/101125811_1.jpg?v=6',
    city: 'Tbilisi',
    year: 2017,
    madeBy: 'Kia',
    model: 'Sedona',
    price: 30800,
    currency: '$',
    labels: ['Minivan', 'Petrol']
  },
  {
    img: 'https://static.my.ge/myauto/photos/3/0/8/3/1/thumbs/102138035_1.jpg?v=1',
    city: 'On a way',
    year: 2014,
    madeBy: 'Toyota',
    model: 'Prius',
    price: 17300,
    currency: '$',
    labels: ['Sedan', 'Hybrid']
  },
  {
    img: 'https://static.my.ge/myauto/photos/1/8/5/2/1/thumbs/101125811_1.jpg?v=6',
    city: 'Tbilisi',
    year: 2017,
    madeBy: 'Kia',
    model: 'Sedona',
    price: 30800,
    currency: '$',
    labels: ['Minivan', 'Petrol']
  },
  {
    img: 'https://static.my.ge/myauto/photos/1/8/5/2/1/thumbs/101125811_1.jpg?v=6',
    city: 'Tbilisi',
    year: 2017,
    madeBy: 'Kia',
    model: 'Sedona',
    price: 30800,
    currency: '$',
    labels: ['Minivan', 'Petrol']
  }
];


export default function Home() {

  return (
    <div className="wrapper">
      <header>
        <div>
            <div class="container">
                <div class="container-left">
                    <div class="search">
                        <img src="logo.png" class="logo" alt="">
                        <i class="fa-solid fa-magnifying-glass" id="glass-icon"></i>
                        <input type="search-box" name="" id="" class="search-box" placeholder="Search">
                    </div>
                </div>

                <div class="container-right">
                    <div class="add-product">
                        <i class="fas fa-plus"></i>
                        <button class="add-item" id="top-button">Add Product</button>
                    </div>
                    <div class="language">
                        <i class="fas fa-globe"></i>
                        <select action="" class="currency-change" id="top-button">
                            <option for="">Georgian</option>
                            <option for="">English</option>
                            <option for="">USD - $</option>
                            <option for="">GEL - ₾</option>
                        </select>
                    </div>
                    <div class="log-in">
                        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.31213 15.4645C6.24981 14.5268 7.52158 14 8.84766 14H16.8477C18.1738 14 19.4456 14.5268 20.3832 15.4645C21.3209 16.4021 21.8477 17.6739 21.8477 19V21C21.8477 21.5523 21.4 22 20.8477 22C20.2954 22 19.8477 21.5523 19.8477 21V19C19.8477 18.2044 19.5316 17.4413 18.969 16.8787C18.4064 16.3161 17.6434 16 16.8477 16H8.84766C8.05201 16 7.28895 16.3161 6.72634 16.8787C6.16373 17.4413 5.84766 18.2044 5.84766 19V21C5.84766 21.5523 5.39994 22 4.84766 22C4.29538 22 3.84766 21.5523 3.84766 21V19C3.84766 17.6739 4.37444 16.4021 5.31213 15.4645Z" fill="#222222" data-darkreader-inline-fill="" style="--darkreader-inline-fill: #d3cfc9;"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M12.8477 4C11.1908 4 9.84766 5.34315 9.84766 7C9.84766 8.65686 11.1908 10 12.8477 10C14.5046 10 15.8477 8.65686 15.8477 7C15.8477 5.34315 14.5046 4 12.8477 4ZM7.84766 7C7.84766 4.23858 10.0862 2 12.8477 2C15.6091 2 17.8477 4.23858 17.8477 7C17.8477 9.76142 15.6091 12 12.8477 12C10.0862 12 7.84766 9.76142 7.84766 7Z" fill="#222222" data-darkreader-inline-fill="" style="--darkreader-inline-fill: #d3cfc9;"></path></svg>
                        <button class="Log-In" id="top-button">Log In</button>
                    </div>
                </div>
            </div>

            <div class="nav-bar">
                <div class="nav-left">
                    <button class="nav-buttons">clearance</button>
                    <button class="nav-buttons">VIN check</button>
                    <button class="nav-buttons">Dealers </button>
                    <button class="nav-buttons">Car Showrooms</button>
                    <button class="nav-buttons">Auctions</button>
                    <button class="nav-buttons">Auto Parts</button>
                    <button class="nav-buttons">Catalog</button>
                    <button class="nav-buttons">Blog</button>
                </div>
                <div class="nav-right">
                    <button class="nav-buttons">Help</button>
                    <button class="nav-buttons">Contact</button>
                </div>
            </div>
        </div>
        <div class="detailed-search">
            <div class="outside-vehicle">
                <button>Automobile</button>
                <button>Motorcycle</button>
                <button>Other</button>
            </div>
            <div class="specifications">
                <select action="" class="currency-change" id="top-button" aria-placeholder="">
                    <option for="">Audi</option>
                    <option for="">Mercedess</option>
                    <option for="">BMW</option>
                    <option for="">Toyota</option>
                </select>
                <select action="" class="currency-change" id="top-button">
                    <option for="">2024</option>
                    <option for="">2023</option>
                    <option for="">2022</option>
                    <option for="">2021</option>
                </select>
                <select action="" class="currency-change" id="top-button">
                    <option for="">Sedan</option>
                    <option for="">Hatchback</option>
                    <option for="">idk any else</option>
                    <option for="">Jeep or smth</option>
                </select>
                <select action="" class="currency-change" id="top-button">
                    <option for="">0-5000</option>
                    <option for="">5001-10000</option> 
                </select>
                <select action="" class="currency-change" id="top-button">
                    <option for="">Tbilisi</option>
                    <option for="">Batumi</option>
                    <option for="">Outside Country</option>
                    <option for="">Space</option>
                </select>
                <select action="" class="currency-change" id="top-button">
                    <option for="">Petrol</option>
                    <option for="">Diesel</option>
                    <option for="">Electric</option>
                    <option for="">Space</option>
                </select>
            </div>
        </div>
    </header>
      {
        cars.map(car => renderCar(car))
      }
    </div>
  )
}
