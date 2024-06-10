"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import useLocalStorage from "../hooks/useLocalStorage";
import { useSearchParams } from "next/navigation";
import { SideFilter } from "../components/sideFilter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PageWrapper } from "../components/PageWrapper";
import {
  faTachometerAlt,
  faGasPump,
  faGears,
  faLocationDot,
  faHeart,
  faHeartCrack,
} from "@fortawesome/free-solid-svg-icons";

// WE have render when we first time open the page
// WE have the re-render when something change inside

export default function Search() {
  const [carsList, setCarsList] = useState([]);
  const router = useRouter();
  const searchParams = useSearchParams();
  const term = searchParams.get("term");
  const fuel = searchParams.get("fuel");
  const location = searchParams.get("location");
  const model = searchParams.get("model");
  const type = searchParams.get("type");
  const year = searchParams.get("year");
  const minPrice = searchParams.get("minPrice");
  const maxPrice = searchParams.get("maxPrice");
  const [user] = useLocalStorage("AUTH", null);

  const makeFavorite = (e, carId) => {
    e.preventDefault();

    if (!user) {
      router.push("/login");
    } else {
      fetch(`http://localhost:3001/api/favorite`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId: user.id, carId: carId }),
      }).then((res) => res.json());
    }
  };

  const generateQuery = () => {
    let queryArray = [];
    if (fuel) {
      queryArray.push(`fuel=${fuel}`);
    }

    if (model) {
      queryArray.push(`model=${model}`);
    }

    if (location) {
      queryArray.push(`location=${location}`);
    }

    if (type) {
      queryArray.push(`type=${type}`);
    }

    if (year) {
      queryArray.push(`year=${year}`);
    }

    if (minPrice) {
      queryArray.push(`minPrice=${minPrice}`);
    }

    if (maxPrice) {
      queryArray.push(`maxPrice=${maxPrice}`);
    }

    if (term) {
      queryArray.push(`term=${term}`);
    }

    queryArray.push(`userId=${user.id}`);

    return queryArray.join("&");
  };

  useEffect(() => {
    const query = generateQuery();

    fetch(`http://localhost:3001/api/search?${query}`)
      .then((res) => res.json())
      .then((res) => {
        setCarsList(res);
      });
  }, [term, fuel, location, model, type, year, minPrice, maxPrice]);
  // WE call function inside use effect, for the first render and any time "term" changes

  const onFilter = (filter) => {
    let query = "";

    query = query + `fuel=${filter.fuel}`;
    query = query + `&location=${filter.location}`;
    query = query + `&model=${filter.model}`;
    query = query + `&type=${filter.type}`;
    query = query + `&year=${filter.year}`;
    query = query + `&minPrice=${filter.price.min}`;
    query = query + `&maxPrice=${filter.price.max}`;
    query = query + `&term=${term}`;

    router.push(`/search?${query}`);
  };

  return (
    <PageWrapper>
      <div className="flex flex-wrap justify-between mt-20 p-12 ">
        <div className="search-left">
          <SideFilter onFilter={onFilter} />
        </div>
        <div className="search-right">
          {carsList.map((car, index) => (
            <div key={index} className="mx-4 mb-8">
              <div className="selected-car-container dark-grey p-4 rounded-lg">
                <div className="flex items-center">
                  <div className="selected-car-container-img">
                    <Link href={`/car-details/${car.id}`}>
                      <img
                        src={car.img}
                        className="max-h-48 max-w-48 rounded-lg"
                        alt="Car"
                      />
                    </Link>
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
                      <button className="ml-2 mr-2">
                        <Link href={`/car-details/${car.id}`}>
                          More Details
                        </Link>
                      </button>
                    </div>
                  </div>
                  <div className="text-white ml-10 ">
                    <div>
                      {car.favorite && (
                        <FontAwesomeIcon
                          onClick={e => makeFavorite(e, car.id)}
                          className="car-card-heart"
                          icon={faHeart}
                          style={{ color: "#fd892b" }}
                        />
                      )}
                      {!car.favorite && (
                        <FontAwesomeIcon
                          onClick={e => makeFavorite(e, car.id)}
                          className="car-card-heart"
                          icon={faHeartCrack}
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
}
