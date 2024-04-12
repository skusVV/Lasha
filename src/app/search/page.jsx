"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Header } from "../components/Header";
import { api } from "../http/backend";
import { SideFilter } from "../components/sideFilter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Footer } from "../components/Footer";
import {
  faTachometerAlt,
  faGasPump,
  faGears,
  faLocation,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

// WE have render when we first time open the page
// WE have the re-render when something change inside

export default function CarDetails({ params }) {
  const [carsList, setCarsList] = useState([]);
  const searchParams = useSearchParams();
  const term = searchParams.get("term");
  const fuel = searchParams.get("fuel");
  const location = searchParams.get("location");
  const model = searchParams.get("model");
  const type = searchParams.get("type");
  const year = searchParams.get("year");
  const minPrice = searchParams.get("minPrice");
  const maxPrice = searchParams.get("maxPrice");

  // useEffect(() => {
  //   // do something
  // }, []); // empty array we call it only on first render

  useEffect(() => {
    console.log("CAll backend to get search value");
    console.log("maxPrice", maxPrice);
    console.log("term", term);
    if (term) {
      api.get(`/api/search?term=${term}`).then((res) => {
        setCarsList(res);
      });
    } else {
      api
        .get(
          `/api/search?fuel=${fuel}&location=${location}&model=${model}&type=${type}&year=${year}&minPrice=${minPrice}&maxPrice=${maxPrice}`
        )
        .then((res) => {
          setCarsList(res);
        });
    }
  }, [term, fuel, location, model, type, year, minPrice, maxPrice]); // WE call function inside use effect, for the first render and any time "term" changes

  return (
    <div>
      <Header />
      <div className="flex flex-wrap justify-between mt-20 p-12 ">
        <div className="search-left">
          <SideFilter />
        </div>
        <div className="search-right">
          {carsList.map((car, index) => (
            <div key={index} className="mx-4 mb-8">
              <div className="selected-car-container dark-grey p-4 rounded-lg">
                <div className="flex items-center">
                  <div className="selected-car-container-img">
                    <a href="./components/page.jsx">
                      <img
                        src={car.img}
                        className="max-h-48 max-w-48 rounded-lg"
                        alt="Car"
                      />
                    </a>
                  </div>
                  <div className="selected-car-container-left ml-10">
                    <div className="selected-car-info">
                      <div className="selected-car-details">
                        <div className="selected-car-year font-bold text-white">
                          {car.madeBy} {car.model}
                        </div>
                        <hr className="mt-3 mb-3 border-white w-20" />
                        <div className="selected-car-madeBy mb-2 font-bold text-white">
                          {car.year}
                        </div>
                        {/* 
                        <div className="selected-car-card-city text-white mt-5">
                          {car.location}
                        </div> */}
                      </div>
                    </div>
                  </div>
                  <div className="selected-car-container-middle ml-20">
                    <div className="selected-car-milage text-white">
                      <FontAwesomeIcon
                        icon={faTachometerAlt}
                        className="mr-5"
                      />
                      {car.milage}
                    </div>
                    <div className="selected-car-fuel text-white mt-5">
                      <FontAwesomeIcon icon={faGasPump} className="mr-5" />
                      {car.fuelType}
                    </div>
                  </div>
                  <div className="selected-car-container-right ml-20">
                    <div className="text-white">
                      <FontAwesomeIcon icon={faGears} className="mr-5" />
                      {car.transmition}
                    </div>
                    <div className="text-white">
                      <FontAwesomeIcon
                        icon={faLocationDot}
                        className="mr-7 mt-5"
                      />
                      {car.location}
                    </div>
                  </div>
                  <div className="selected-car-container-buy ml-40">
                    <div className="selected-car-price text-white ml-5">
                      {car.price} {car.currency}
                    </div>
                    <div className="selected-car-sell-button rounded-lg mt-4 text-white">
                      <button className="ml-2 mr-2">More Details</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
