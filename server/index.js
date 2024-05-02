const express = require("express");
const cors = require("cors");
const { readFileSync, writeFile } = require('fs');

const readCars = () => {
  const data = readFileSync('./cars.json');

  return JSON.parse(data);
}

const writeCar = (car) => {
  const cars = readCars();
  const newCars = [...cars, car];

  writeFile('./cars.json', JSON.stringify(newCars), (err) => {
    if (err) {
      console.log('Failed to write updated data to file');
      return;
    }
    console.log('Updated file successfully');
  });
}

const writeCars = (cars) => {
  writeFile('./cars.json', JSON.stringify(cars), (err) => {
    if (err) {
      console.log('Failed to write updated data to file');
      return;
    }
    console.log('Updated file successfully');
  });
}

const app = express();

app.use(
  express.urlencoded({
    extended: true,
  }),
);

app.use(express.json());

app.use(cors());

app.get("/api/test", (req, res) => {
  return res.send("Hey");
});

app.get("/api/random-cars", (req, res) => {
  const cars = readCars();

  const response = cars
    .sort(() => Math.random() - Math.random())
    .filter((item, i) => i < 6);
  return res.send(response);
});

app.get("/api/cars/:id", (req, res) => {
  const cars = readCars();
  const response = cars.find((item) => item.id === Number(req.params.id));

  return res.send(response);
});

app.get("/api/cars", (req, res) => {
  const cars = readCars();

  return res.send(cars);
});

app.post("/api/cars", (req, res) => {
  const { body } = req;
  const cars = readCars();
  const car = {
    id: cars.length + 1,
    img: body.imageRef,
    type: body.carModel,
    location: body.location,
    year: body.year,
    madeBy: body.carMadeBy,
    model: body.carModel,
    price: body.price,
    currency: body.currency,
    fuelType: body.fuel,
    milage: body.millage,
    transmition: body.transmition,
    labels: body.labels.split(','),
  }

  writeCar(car);
  
  return res.send(car);
});

app.patch("/api/cars/:id", (req, res) => {
  const { body, params } = req;

  const updatedCar = {
    id: Number(params.id),
    img: body.imageRef,
    type: body.type,
    location: body.location,
    year: body.year,
    madeBy: body.carModel,
    model: body.model,
    price: body.price,
    currency: body.currency,
    fuelType: body.fuel,
    milage: body.millage,
    transmition: body.transmition,
    labels: body.labels.split(','),
  }
  const cars = readCars();

  const newCars = cars.map(item => {
    if(item.id !== updatedCar.id) {
      return item;
    } else {
      return updatedCar;
    }
  });

  writeCars(newCars)
  
  return res.send(newCars);
});

app.get("/api/search", (req, res) => {

  const filter = req.query;

  let newCars = readCars();
  if (filter.term) {
    newCars = newCars.filter(
      (car) =>
        car.madeBy.toLowerCase().includes(filter.term.toLowerCase()) ||
        car.model.toLowerCase().includes(filter.term.toLowerCase()) ||
        car.fuelType.toLowerCase().includes(filter.term.toLowerCase()) ||
        car.location.toUpperCase().includes(filter.term.toUpperCase()) ||
        car.labels.some((label) =>
          label.toLowerCase().includes(filter.term.toLowerCase())
        )
    );
  }

  if (filter.model) {
    newCars = newCars
      .filter(
        (car) =>
          car.madeBy.toLowerCase() === filter.model.toLowerCase() ||
          filter.model === "---"
      )
      .filter(
        (car) =>
          (car.price > filter.minPrice && car.price < filter.maxPrice) ||
          filter.maxPrice === "null"
      )
      .filter(
        (car) => car.year === Number(filter.year) || filter.year === "null"
      )
      .filter(
        (car) =>
          car.location === filter.location || filter.location === "Anywhere"
      );
  }

  return res.send(newCars);
});

app.listen(3001, () => {
  console.log("Server started on the port 3001");
});
