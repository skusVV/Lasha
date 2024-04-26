import { cars as defaultCars } from "./db";

let cars = [];
const carsFromLocalStorage = localStorage.getItem('CARS');
if(carsFromLocalStorage) {
  // console.log('VALUES FROM STORAGE');
  cars = JSON.parse(carsFromLocalStorage);
} else {
  // console.log('VALUES FROM DB');
  localStorage.setItem('CARS', JSON.stringify(defaultCars));
  cars = defaultCars;
}

// YOU can't import anything from the react code. It is a fake backend. there is no access to UI code.

function parseQueryString(url) {
  console.log('url', url)
  // Directly use everything after '?' in the URL
  const queryString = url.split("?")[1];
  const params = new URLSearchParams(queryString);
  const queryObject = {};

  for (const [key, value] of params.entries()) {
    // Convert 'null' to null, 'undefined' to undefined, and retain other values as is
    if (value === "null") {
      queryObject[key] = null;
    } else if (value === "undefined") {
      queryObject[key] = undefined;
    } else {
      queryObject[key] = value;
    }
  }

  return queryObject;
}

export const api = {
  post: (url, body) => {
      if(url === '/api/cars') {
        const car = {
          id: cars.length + 1,
          img: body.imageRef,
          type: body.carModel,
          location: body.location,
          year: body.year,
          madeBy: body.carMadeBy,
          model: body.carModel,
          price: body.price,
          currency: body.currency,
          fuelType: body.fuel,
          milage: body.millage,
          transmition: body.transmition,
          labels: body.labels.split(','),
        }
        const carsFromLocalStorage = localStorage.getItem('CARS');
        // console.log('carsFromLocalStorage', carsFromLocalStorage); // it is a string
        const carsArray = JSON.parse(carsFromLocalStorage);
        // console.log('carsArray', carsArray); // it is a Array
        const newCars = [...carsArray, car];
        // console.log('JSON.stringify(newCars)', JSON.stringify(newCars)); // String again
        localStorage.setItem('CARS', JSON.stringify(newCars));
          // cars = [...cars, body];
          // return body;
          return new Promise((resolve) => {
            setTimeout(() => {
              resolve(car);
            }, 500);
          });
      }
  },

  patch: (url, body) => {
      if(url.includes('/api/cars/')) {
          const id = Number(url.split('/')[3]);
          // FIND a car by id, 
          // Update that object
          const updatedCar = {
            id: body.id,
            img: body.imageRef,
            type: body.type,
            location: body.location,
            year: body.year,
            madeBy: body.carModel,
            model: body.model,
            price: body.price,
            currency: body.currency,
            fuelType: body.fuel,
            milage: body.millage,
            transmition: body.transmition,
            labels: body.labels.split(','),
          }
          console.log('body', body)
          console.log('updatedCar', updatedCar)
          const carsFromLocalStorage = localStorage.getItem('CARS');
          const carsArray = JSON.parse(carsFromLocalStorage);
        // console.log('carsArray', carsArray); // it is a Array
          const newCars = carsArray.map(item => {
            if(item.id !== updatedCar.id) {
              return item;
            } else {
              return updatedCar;
            }
          });
          localStorage.setItem('CARS', JSON.stringify(newCars));
        // console.log('JSON.stringify(newCars)', JSON.stringify(newCars)); // String again
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve(newCars);
          }, 500);
        });
        // localStorage.setItem('CARS', JSON.stringify(newCars));
          // Think how to save this value. But not dublicate
          // Take on .map function

      }
  }
};


// ?fuel=Any
// &location=Anywhere
// &model=---
// &type=All
// &year=null
// &minPrice=undefined
// &maxPrice=null
// &term=bmw