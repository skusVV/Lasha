"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { PageWrapper } from "../../components/PageWrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getCarPrice } from "../../utils";
import useLocalStorage from "../../hooks/useLocalStorage";
import {
  faLocationDot,
  faRoad,
  faUser,
  faHeart,
  faHeartCrack,
} from "@fortawesome/free-solid-svg-icons";
import { getWords } from "../../languages/language";

export default function CarDetails({ params }) {
  const [car, setCar] = useState({});
  const [currency] = useLocalStorage("CURRECNY", "USD");
  const router = useRouter();
  const user = JSON.parse(localStorage.getItem("AUTH"));
  const [language] = useLocalStorage("LANGUAGE", "ENG");
  const words = getWords(language);

  const makeFavorite = (e) => {
    e.preventDefault();

    if (!user) {
      router.push("/login");
    } else {
      console.log(car);
      fetch(`http://localhost:3001/api/favorite`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId: user.id, carId: car.id }),
      })
        .then((res) => res.json())
        .then((res) => console.log("USRES response", res));
    }
  };

  useEffect(() => {
    fetch(`http://localhost:3001/api/cars/${params.id}?userId=${user.id}`)
      .then((res) => res.json())
      .then((res) => {
        setCar(res);
      })
      .catch(() => {
        // router.push("/");
      });
  }, []);
  return (
    <PageWrapper>
      {car.id && (
        <div>
          <div className="flex justify-center mt-20">
            <div className="selected-car-container dark-grey p-4 rounded-lg w-[1000px]  ">
              <div className="flex items-center">
                <div className="selected-car-container-left">
                  <img
                    src={car.img}
                    className="max-h-96 max-w-100 rounded-lg mr-20 mt-10 ml-6 mb-10"
                    alt="Car"
                  />
                </div>
                <div className="selected-car-container-right w-[300px]">
                  <div className="selected-car-info">
                    <div className="selected-car-details ml-10">
                      <div className="selected-car-year font-bold text-white flex flex-align">
                        <div> {car.year}</div>
                        <div className="selected-car-price text-white ml-10">
                          {car.favorite && (
                            <FontAwesomeIcon
                              onClick={makeFavorite}
                              className="car-card-heart"
                              icon={faHeart}
                              style={{ color: "#fd892b" }}
                            />
                          )}
                          {!car.favorite && (
                            <FontAwesomeIcon
                              onClick={makeFavorite}
                              className="car-card-heart"
                              icon={faHeartCrack}
                            />
                          )}
                        </div>
                      </div>
                      <hr className="mt-3 mb-3 border-white w-[100px]" />
                      <div className="selected-car-madeBy mb-10 font-bold text-white">
                        {car.madeBy} {car.model}
                      </div>
                      <div className="selected-car-price text-white ">
                        <FontAwesomeIcon icon={faRoad} className="mr-2" />{" "}
                        {car.milage} km
                      </div>
                      <div className="selected-car-card-city text-white ml-1 mt-3">
                        <FontAwesomeIcon
                          icon={faLocationDot}
                          className="mr-3"
                        />{" "}
                        {""}
                        {car.location}
                      </div>
                    </div>
                    <div className="flex justify-center items-center border rounded-lg ml-10 mt-10 h-[40px] text-white w-[150px]">
                      <div className="mr-3">
                        <FontAwesomeIcon icon={faUser} />
                      </div>
                      {user.name}
                    </div>

                    <div className="mt-10 ml-10 flex flex-col">
                      <div className="selected-car-price text-white">
                        {getCarPrice(currency, car.price)}
                      </div>
                      <button className="selected-car-sell-button rounded-lg text-white w-[150px] mt-2">
                        <div className="selected-car-sell-button justify-center mt-1 mb-1">
                          {words.contactSeller}
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>{" "}
              <div className="font-bold text-white ml-6  text-xl">
                Description{" "}
              </div>
              <hr className="ml-6 mt-3 mb-3 border-white w-[200px]" />
              <div className="selected-car-card-city text-white text-center mt-6 mb-10">
                {car.description}
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center mb-[150px] mt-[100px]">
            <div className="flex flex-col justify-center items-center">
              <div className=" dark-grey p-4 rounded-lg w-[500px] flex justify-between">
                <div className="selected-car-all justify-center ml-6 w-[400px]">
                  <div className="selected-car-all flex flex-col items-center w-[400px] space-y-4">
                    <div className="selected-car-one flex justify-between items-center w-full mt-4">
                      <div className="text-white flex-1">Manufacturer</div>
                      <div className="text-white text-center w-[100px]">-</div>
                      <div className="text-white flex-1 text-right">
                        {car.madeBy}
                      </div>
                    </div>
                    <div className="selected-car-one flex justify-between items-center w-full">
                      <div className="text-white flex-1">Model</div>
                      <div className="text-white text-center w-[100px]">-</div>
                      <div className="text-white flex-1 text-right">
                        {car.model}
                      </div>
                    </div>
                    <div className="selected-car-one flex justify-between items-center w-full">
                      <div className="text-white flex-1">Type</div>
                      <div className="text-white text-center w-[100px]">-</div>
                      <div className="text-white flex-1 text-right">
                        {car.type}
                      </div>
                    </div>
                    <div className="selected-car-one flex justify-between items-center w-full">
                      <div className="text-white flex-1">Year</div>
                      <div className="text-white text-center w-[100px]">-</div>
                      <div className="text-white flex-1 text-right">
                        {car.year}
                      </div>
                    </div>
                    <div className="selected-car-one flex justify-between items-center w-full">
                      <div className="text-white flex-1">Location</div>
                      <div className="text-white text-center w-[100px]">-</div>
                      <div className="text-white flex-1 text-right">
                        {car.location}
                      </div>
                    </div>
                    <div className="selected-car-one flex justify-between items-center w-full">
                      <div className="text-white flex-1">Mileage </div>
                      <div className="text-white text-center w-[100px]">-</div>
                      <div className="text-white flex-1 text-right">
                        {car.milage}
                      </div>
                    </div>

                    <div className="selected-car-one flex justify-between items-center w-full">
                      <div className="text-white flex-1">Driver Position</div>
                      <div className="text-white text-center w-[100px]">-</div>
                      <div className="text-white flex-1 text-right">
                        {car.wheel}
                      </div>
                    </div>
                    <div className="selected-car-one flex justify-between items-center w-full">
                      <div className="text-white flex-1">Engine Capacity</div>
                      <div className="text-white text-center w-[100px]">-</div>
                      <div className="text-white flex-1 text-right">
                        {car.liters}
                      </div>
                    </div>
                    <div className="selected-car-one flex justify-between items-center w-full">
                      <div className="text-white flex-1">Fuel Type</div>
                      <div className="text-white text-center w-[100px]">-</div>
                      <div className="text-white flex-1 text-right">
                        {car.fuelType}
                      </div>
                    </div>
                    <div className="selected-car-one flex justify-between items-center w-full">
                      <div className="text-white flex-1">Transmition</div>
                      <div className="text-white text-center w-[100px]">-</div>
                      <div className="text-white flex-1 text-right">
                        {car.transmition}
                      </div>
                    </div>
                    <div className="selected-car-one flex justify-between items-center w-full">
                      <div className="text-white flex-1">Doors</div>
                      <div className="text-white text-center w-[100px]">-</div>
                      <div className="text-white flex-1 text-right">
                        {car.doors}
                      </div>
                    </div>
                    <div className="selected-car-one flex justify-between items-center w-full">
                      <div className="text-white flex-1">Exterior Color</div>
                      <div className="text-white text-center w-[100px]">-</div>
                      <div className="text-white flex-1 text-right">
                        {car.exterior}
                      </div>
                    </div>

                    <div className="selected-car-one flex justify-between items-center w-full">
                      <div className="text-white flex-1">Interior Color</div>
                      <div className="text-white text-center w-[100px]">-</div>
                      <div className="text-white flex-1 text-right">
                        {car.interiorColor}
                      </div>
                    </div>
                    <div className="selected-car-one flex justify-between items-center w-full">
                      <div className="text-white flex-1">Interior Material</div>
                      <div className="text-white text-center w-[100px]">-</div>
                      <div className="text-white flex-1 text-right">
                        {car.interiorMaterial}
                      </div>
                    </div>
                    <div className="selected-car-one flex justify-between items-center w-full">
                      <div className="text-white flex-1">Tech Inspection</div>
                      <div className="text-white text-center w-[100px]">-</div>
                      <div className="text-white flex-1 text-right">
                        {car.techInspection}
                      </div>
                    </div>
                    <div className="selected-car-one flex justify-between items-center w-full">
                      <div className="text-white flex-1">Accidents</div>
                      <div className="text-white text-center w-[100px]">-</div>
                      <div className="text-white flex-1 text-right">
                        {car.accidents}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </PageWrapper>
  );
}
