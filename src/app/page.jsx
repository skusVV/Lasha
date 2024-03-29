"use client";
import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { CarsList } from "./components/CarsList";
import { api } from './http/backend';

// GET -- get some resource
// POST -- CREATE some resource
// PATCH -- Change some resource
// DELETE - delete some resource

export default function Home() {
  const [carsList, setCarsList] = useState([]);

  useEffect(() => { // Component did Mount
    api.get('/api/cars')
      .then(res => {
        setCarsList(res)
      })
  }, []);

  const onFilter = (filter) => {
    console.log('filter on the UI', filter);
    let query = '/api/cars?';

    query = query + `fuel=${filter.fuel}`
    query = query + `&location=${filter.location}`
    query = query + `&model=${filter.model}`
    query = query + `&type=${filter.type}`
    query = query + `&year=${filter.year}`
    query = query + `&minPrice=${filter.price.min}`
    query = query + `&maxPrice=${filter.price.max}`

    api.get(query)
      .then(res => {
        setCarsList(res)
      });
    //   .filter((car) => car.type === filter.type || filter.type === "All")
    //   .filter(
    //     (car) =>
    //       car.location === filter.location || filter.location === "Anywhere"
    //   )
    //   .filter((car) => car.fuelType === filter.fuel || filter.fuel === "Any");
    // setCarsList(newCars);
  };

  const onFiltersClear = () => {
    api.get('/api/cars')
      .then(res => {
        setCarsList(res)
      })
  };

  return (
    <>
      <Header onFilter={onFilter} onClear={onFiltersClear} />
      <div className="wrapper">
        <CarsList cars={carsList} anything="dasda" passAnythingElse={{}} />
      </div>
    </>
  );
}
