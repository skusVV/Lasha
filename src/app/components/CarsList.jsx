"use client";
import { renderCar } from "./car";

export const CarsList = (props) => {
  return <>{props.cars.map((item, index) => renderCar(item, index))}</>;
};
