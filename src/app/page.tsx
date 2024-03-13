import {renderCar} from './components/car';


const cars = [
  {
    img: 'https://static.my.ge/myauto/photos/1/8/5/2/1/thumbs/101125811_1.jpg?v=6',
    city: 'Tbilisi',
    year: 2017,
    madeBy: 'Kia',
    model: 'Sedona',
    price: 30800,
    currency: '$',
    labels: ['Minivan', 'Petrol']
  },
  {
    img: 'https://static.my.ge/myauto/photos/3/0/8/3/1/thumbs/102138035_1.jpg?v=1',
    city: 'On a way',
    year: 2014,
    madeBy: 'Toyota',
    model: 'Prius',
    price: 17300,
    currency: '$',
    labels: ['Sedan', 'Hybrid']
  },
  {
    img: 'https://static.my.ge/myauto/photos/1/8/5/2/1/thumbs/101125811_1.jpg?v=6',
    city: 'Tbilisi',
    year: 2017,
    madeBy: 'Kia',
    model: 'Sedona',
    price: 30800,
    currency: '$',
    labels: ['Minivan', 'Petrol']
  },
  {
    img: 'https://static.my.ge/myauto/photos/3/0/8/3/1/thumbs/102138035_1.jpg?v=1',
    city: 'On a way',
    year: 2014,
    madeBy: 'Toyota',
    model: 'Prius',
    price: 17300,
    currency: '$',
    labels: ['Sedan', 'Hybrid']
  },
  {
    img: 'https://static.my.ge/myauto/photos/1/8/5/2/1/thumbs/101125811_1.jpg?v=6',
    city: 'Tbilisi',
    year: 2017,
    madeBy: 'Kia',
    model: 'Sedona',
    price: 30800,
    currency: '$',
    labels: ['Minivan', 'Petrol']
  },
  {
    img: 'https://static.my.ge/myauto/photos/3/0/8/3/1/thumbs/102138035_1.jpg?v=1',
    city: 'On a way',
    year: 2014,
    madeBy: 'Toyota',
    model: 'Prius',
    price: 17300,
    currency: '$',
    labels: ['Sedan', 'Hybrid']
  },
  {
    img: 'https://static.my.ge/myauto/photos/1/8/5/2/1/thumbs/101125811_1.jpg?v=6',
    city: 'Tbilisi',
    year: 2017,
    madeBy: 'Kia',
    model: 'Sedona',
    price: 30800,
    currency: '$',
    labels: ['Minivan', 'Petrol']
  },
  {
    img: 'https://static.my.ge/myauto/photos/3/0/8/3/1/thumbs/102138035_1.jpg?v=1',
    city: 'On a way',
    year: 2014,
    madeBy: 'Toyota',
    model: 'Prius',
    price: 17300,
    currency: '$',
    labels: ['Sedan', 'Hybrid']
  },
];


export default function Home() {

  return (
    <div className="wrapper">
      {
        cars.map(car => renderCar(car))
      }
    </div>
  )
}
