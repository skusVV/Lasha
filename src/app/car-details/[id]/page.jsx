"use client"
// import {cars} from '../../constants/constants';
import { useState, useEffect } from "react";
import { api } from '../..//http/backend';


export default function CarDetails({ params }) {
  const [car, setCar] = useState({})
  // Implement set Car
    // const car = cars.find(item => item.id === Number(params.id));
    // console.log(car)
    useEffect(() => { // Component did Mount
      api.get(`/api/cars/${params.id}`)
        .then(res => {
          setCar(res)
        })
    }, []);


  return (
    <div style={{color: 'white'}}>
        CAR with ID: {params.id}
        <img  src={car.img} />
        <div className="car-card-city">{car.city}</div>
        <div className="car-card-info">{car.year} - {car.madeBy} {car.model}</div>
        <div className="car-card-price">{car.price} {car.currency}</div>
    </div>
  )
}
