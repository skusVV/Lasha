"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { PageWrapper } from "../../components/PageWrapper";
import { getCarPrice } from '../../utils';
import useLocalStorage from '../../hooks/useLocalStorage';

export default function CarDetails({ params }) {
  const [car, setCar] = useState({});
  const [ currency ] = useLocalStorage('CURRECNY', 'USD');
  const router = useRouter();

  useEffect(() => {
    fetch(`http://localhost:3001/api/cars/${params.id}`)
      .then((res) => res.json())
      .then((res) => {
        setCar(res);
      })
      .catch(() => {
        router.push("/");
      });
  }, []);
  return (
    <PageWrapper>
      {car.id && (
        <div>
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
                    <div className="selected-car-details">
                      <div className="selected-car-year font-bold text-white">
                        {car.year}
                      </div>
                      <hr className=" mt-3 mb-3 border-white w-20" />
                      <div className="selected-car-madeBy mb-10 font-bold text-white">
                        {car.madeBy} {car.model}
                      </div>
                      <div className="selected-car-price text-white">
                        {
                          getCarPrice(currency, car.price)
                        }
                      </div>
                      <div className="selected-car-card-city text-white">
                        {car.location}
                      </div>
                      <div className="selected-car-card-city text-white">
                        {car.description}
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
          <div className="flex justify-center items-center h-screen">
            <div className="flex justify-center mt-20 w-[800px]">
              <div className="selected-car-container dark-grey p-4 rounded-lg w-[400px] flex justify-between">
                <div className="selected-car-details">
                  <div className=" text-white">
                    Exterior Color - {car.exterior}
                  </div>
                  <div className="text-white">Engine Liters -{car.liters}</div>
                  <div className=" text-white">Car Doors - {car.doors}</div>
                  <div className=" text-white">
                    Driver Position - {car.wheel}
                  </div>
                  <div className=" text-white">
                    Interior Color - {car.interiorColor}
                  </div>
                  <div className=" text-white">
                    Tech Inspection - {car.techInspection}
                  </div>
                  <div className=" text-white">Accidents - {car.accidents}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </PageWrapper>
  );
}
{
  /* <div className="selected-car-details">
                  <div className=" text-white">
                    Exterior Color - {car.exterior}
                  </div>
                  <div className="text-white">Engine Liters -{car.liters}</div>
                  <div className=" text-white">Car Doors - {car.doors}</div>
                  <div className=" text-white">
                    Driver Position - {car.wheel}
                  </div>
                  <div className=" text-white">
                    Interior Color - {car.interiorColor}
                  </div>
                </div> */
}
