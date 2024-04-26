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
  get: (url) => {
    if (url === "/api/random-cars") { // Random 6 cars list
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(
            [...cars]
              .sort(() => Math.random() - Math.random())
              .filter((item, i) => i < 6)
          );
        }, 500);
      });
    }

    if (url.includes("/api/cars/")) { // Get car by ID
      const urlArray = url.split("/");
      const id = urlArray[urlArray.length - 1]; // the last index in the arr is always arr length - 1.

      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const car = cars.find((item) => item.id === Number(id));
          if (car) {
            resolve(car);
          } else {
            reject();
          }
        }, 500);
      });
    }

    if (url.includes("/api/cars")) { // All Cars
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(cars)
        }, 500);
      });
    }
    if (url.includes("/api/search?")) { // search
      const filter = parseQueryString(url);
      console.log('31231232', filter)
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
      let newCars = cars;
      if(filter.term) {
        newCars = newCars.filter(
          (car) =>
            car.madeBy.toLowerCase().includes(filter.term.toLowerCase()) ||
            car.model.toLowerCase().includes(filter.term.toLowerCase()) ||
            car.fuelType.toLowerCase().includes(filter.term.toLowerCase()) ||
            car.location.toUpperCase().includes(filter.term.toUpperCase()) ||
            car.labels.some(label => label.toLowerCase().includes(filter.term.toLowerCase()))
        );
      } 
    
      if(filter.model) {
        newCars = newCars
        .filter(
          (car) =>
            car.madeBy.toLowerCase() === filter.model.toLowerCase() ||
            filter.model === "---"
        )
        .filter(
          (car) =>
            (car.price > filter.minPrice && car.price < filter.maxPrice) ||
            filter.maxPrice === null
        )
        .filter(
          (car) => car.year === Number(filter.year) || filter.year === null
        )
        .filter(
          (car) => car.location === filter.location || filter.location === 'Anywhere'
        );
      }

      return new Promise((resolve) => {
        setTimeout(() => {
          resolve([...newCars]);
        }, 500);
      });
    }
  },
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
  // delete: url => {
  //     if(url.includes('/api/cars/')) {
  //         const id = Number(path.split('/')[3]);

  //         cars = cars.filter(car => car.id === id);
  //         return null;
  //     }
  // },
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