"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Header } from "../components/Header";
import { api } from "../http/backend";


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
    console.log('CAll backend to get search value');
    console.log('maxPrice', maxPrice);
    console.log('term', term);
    if(term) {
      api.get(`/api/search?term=${term}`).then((res) => {
        setCarsList(res);
      });
    } else {
      api.get(`/api/search?fuel=${fuel}&location=${location}&model=${model}&type=${type}&year=${year}&minPrice=${minPrice}&maxPrice=${maxPrice}`).then((res) => {
        setCarsList(res);
      });
    }
    
  }, [term, fuel, location, model, type, year, minPrice, maxPrice]); // WE call function inside use effect, for the first render and any time "term" changes

  return (
    <div>
      <Header></Header>
      {carsList.map((car) => {
        return (
          <div>
            {car.id} {car.madeBy}
          </div>
        );
      })}
    </div>
  );
}
