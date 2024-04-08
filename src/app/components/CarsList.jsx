"use client";
import { renderCar } from "./Car/Car";
// I just did some changes

export const CarsList = (props) => {
  return <>
    {props.cars.map((item, index) => renderCar(item, index))}
  </>;
};
