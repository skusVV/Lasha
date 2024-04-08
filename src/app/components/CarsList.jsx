"use client";
import { renderCar } from "./Car/Car";

export const CarsList = (props) => {
  return <>
    {props.cars.map((item, index) => renderCar(item, index))}
  </>;
};

//cheeseburger