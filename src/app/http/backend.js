import { cars } from './db';

function parseQueryString(url) {
    // Directly use everything after '?' in the URL
    const queryString = url.split('?')[1];
    const params = new URLSearchParams(queryString);
    const queryObject = {};
  
    for (const [key, value] of params.entries()) {
      // Convert 'null' to null, 'undefined' to undefined, and retain other values as is
      if (value === 'null') {
        queryObject[key] = null;
      } else if (value === 'undefined') {
        queryObject[key] = undefined;
      } else {
        queryObject[key] = value;
      }
    }
  
    return queryObject;
  }

export const api = ({
    get: url => {
        if(url === '/api/cars') { // whole list
            return new Promise(resolve => {
                setTimeout(() => {
                    resolve(
                        [...cars].filter((item, i) => i < 6)
                        )
                }, 500);
            });
        }
        console.log(url)
        if(url.includes('/api/cars/')) { // whole list
            return new Promise(resolve => {
                setTimeout(() => {
                    resolve(
                        cars[1]
                        )
                }, 500);
            });
        }

        if(url.includes('/api/cars?')) {
            const filter = parseQueryString(url);
            console.log('filter on the backend', filter);
            const newCars = cars
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
                .filter((car) => car.year === Number(filter.year) || filter.year === null)

            return new Promise(resolve => {
                setTimeout(() => {
                    resolve(
                        [...newCars].filter((item, i) => i < 6)
                        )
                }, 500);
            });
        }
    },
    // post: (url, body) => {
    //     if(url === '/api/cars') {
    //         cars = [...cars, body];
    //         return body;
    //     }
    // },
    // delete: url => {
    //     if(url.includes('/api/cars/')) {
    //         const id = Number(path.split('/')[3]);

    //         cars = cars.filter(car => car.id === id);
    //         return null;
    //     }
    // },
    // patch: (url, body) => {
    //     if(url.includes('/api/cars/')) {
    //         const id = Number(path.split('/')[3]);
    //         cars = cars.map(car => car.id === id ? body : car);
    //         return body;
    //     }
    // }
})