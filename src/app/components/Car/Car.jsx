"use client"
import Link from 'next/link';
import { useRouter } from "next/navigation";
import { StyledCar } from './styles';
import useLocalStorage from '../../hooks/useLocalStorage';
import { getCarPrice } from '../../utils';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faKissWinkHeart
} from "@fortawesome/free-solid-svg-icons";

export const renderCar = (car, key) => {
  const router = useRouter();
  const [currency] = useLocalStorage('CURRECNY', 'USD');
  const [user] = useLocalStorage('AUTH', null);
  const makeFavorite = (e) => {
    e.preventDefault();

    if(!user) {
      router.push('/login');
    } else {
      console.log(car)
      fetch(`http://localhost:3001/api/favorite`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({userId: user.id, carId: car.id}),
      })
        .then((res) => res.json())
        .then((res) => console.log("USRES response", res));
    }
  }

    return (
      <StyledCar>
        <Link className="car-card" key={key} href={`/car-details/${car.id}`}>
          <img className="car-card-img" src={car.img} />
          <div className="car-card-content" >
            <FontAwesomeIcon onClick={makeFavorite} className="car-card-heart" icon={faKissWinkHeart} />
            <div className="car-card-city">{car.city}</div>
            <div className="car-card-info">{car.year} - {car.madeBy} {car.model}</div>
            <div className="car-card-price">{getCarPrice(currency, car.price)}</div>
            <div className="car-card-labels">
              {
                car.labels.map(label => {
                  return <span className="car-card-label">{label}</span>
                })
              }
            </div>
          </div>
        </Link>
       </StyledCar>
    )
  }