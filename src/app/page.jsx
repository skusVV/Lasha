"use client"
import { useState } from 'react';
import { renderCar } from './components/car';
import { Header } from './components/Header';
import { CarsList } from './components/CarsList';
import { cars } from './constants/constants'; // IT AWAYS 10 items, it aways full list


export default function Home() {
  const [carsList, setCarsList] = useState(cars); // carsList it dynamic, it can change.
  const onFilter = (filter) => {
    const newCarsList = cars.filter(car => car.madeBy.toLowerCase() === filter.model.toLowerCase() || filter.model === '---' );
    setCarsList(newCarsList);
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
