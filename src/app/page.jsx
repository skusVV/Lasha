"use client"
import { useState } from 'react';
import { renderCar } from './components/car';
import { Header } from './components/Header';
import { CarsList } from './components/CarsList';
import { cars } from './constants/constants'; // IT AWAYS 10 items, it aways full list

// const filterByCarMadeBy = (filter) => {
//   return cars.filter(car => car.madeBy.toLowerCase() === filter.model.toLowerCase() || filter.model === '---' );
// }
// https://medium.com/@sarthakastic/routing-in-next-js-13-470282a985ed

export default function Home() {
  const [carsList, setCarsList] = useState(cars); // carsList it dynamic, it can change.
  const onFilter = (filter) => {
    const newCars = cars
      .filter(car => car.madeBy.toLowerCase() === filter.model.toLowerCase() || filter.model === '---' )
      .filter(car => car.price > filter.price.min && car.price < filter.price.max || filter.price.max === null)
      .filter(car => car.year === filter.year || filter.year === null);
      .filter(car => car.model.toLowerCase() === filter.type.toLowerCase() || filter.type === 'All' );   // Chain more filters
    setCarsList(newCars);
    // The same as below
    // const carListFilteredMyModel = cars.filter(car => car.madeBy.toLowerCase() === filter.model.toLowerCase() || filter.model === '---' );
    // const carListFilteredByPrice = carListFilteredMyModel.filter(car => car.price > filter.price.min && car.price < filter.price.max || filter.price.max === null);
    // const carListFilteredByYear = carListFilteredByPrice.filter(car => car.year === filter.year || filter.year === null)
  
    // setCarsList(carListFilteredByYear);
  }

  const onFiltersClear = () => {
    setCarsList(cars);
  }

  return (
    <>
      <Header onFilter={onFilter} onClear={onFiltersClear}/>
      <div className="wrapper">
        <CarsList cars={carsList} anything="dasda" passAnythingElse={{}} />
      </div>
    </>
  )
}
