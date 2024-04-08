"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { api } from "../..//http/backend";
import { Header } from "../../components/Header";

export default function CarDetails({ params }) {
  const [car, setCar] = useState({});
  const router = useRouter();

  useEffect(() => {
    api
      .get(`/api/cars/${params.id}`)
      .then((res) => {
        setCar(res);
      })
      .catch(() => {
        router.push("/");
      });
  }, []);

  return (
    <div>
      <Header></Header>
      {car.id && (
        <div className="flex justify-center mt-20">
          <div className="selected-car-container dark-grey p-4 rounded-lg">
            <div className="flex items-center">
              <div className="selected-car-container-left">
                <img
                  src={car.img}
                  className="max-h-96 max-w-100 rounded-lg mr-20 mt-10 ml-6 mb-10"
                  alt="Car"
                />
              </div>
              <div className="selected-car-container-right">
                <div className="selected-car-info">
                  CAR with ID: {params.id}
                  <div className="selected-car-details">
                    <div className="selected-car-year font-bold text-white">
                      {car.year}
                    </div>
                    <hr className=" mt-3 mb-3 border-white w-20" />
                    <div className="selected-car-madeBy mb-10 font-bold text-white">
                      {car.madeBy} {car.model}
                    </div>
                    <div className="selected-car-price text-white">
                      {car.price} {car.currency}
                    </div>
                    <div className="selected-car-card-city text-white">
                      {car.location}
                    </div>
                  </div>
                  <div className="selected-car-sell-button rounded-lg mt-20 text-white">
                    <button className="ml-2 mr-2">Contact Seller</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
