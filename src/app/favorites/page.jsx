"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import useLocalStorage from "../hooks/useLocalStorage";
import { PageWrapper } from "../components/PageWrapper";
import { getCarPrice } from "../utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faHeartCrack } from "@fortawesome/free-solid-svg-icons";

export default function favorites({ car }) {
  const [favorites, setFavorites] = useState([]);
  const [currency] = useLocalStorage("CURRECNY", "USD");

  const user = JSON.parse(localStorage.getItem("AUTH"));

  const makeFavorite = (e) => {
    e.preventDefault();

    if (!user) {
      router.push("/login");
    } else {
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
    fetch(`http://localhost:3001/api/user/favorites?userId=${user?.id}`)
      .then((res) => res.json())
      .then((res) => {
        setFavorites(res);
      });
  }, []);

  return (
    <PageWrapper>
      <div className="favorites-container" style={{ padding: "20px" }}>
        {favorites.length > 0 ? (
          favorites.map((car) => (
            <Link className="" href={`/car-details/${car.id}`}>
              <div className="flex flex-align mb-5 text-white">
                <img className="w-1/5" src={car.img} />
                <div className="favorite-car-details">
                  <div>{car.year}</div>
                  <hr className="border-t border-gray-300" />

                  <div className=" ">
                    {car.madeBy} {car.model}
                  </div>
                  <div className="">{getCarPrice(currency, car.price)}</div>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <p>No favorite cars found.</p>
        )}
      </div>
    </PageWrapper>
  );
}
