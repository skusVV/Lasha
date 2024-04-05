"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Header } from "../components/Header";
import { api } from "../http/backend";

export default function CarDetails({ params }) {
  const [carsList, setCarsList] = useState([]);
  const searchParams = useSearchParams();

  useEffect(() => {
    // Component did Mount
    const term = searchParams.get("term");
    api.get(`/api/search?term=${searchParams}`).then((res) => {
      setCarsList(res);
      console.log("testetsttg" + searchParams);
    });
  }, []);

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
