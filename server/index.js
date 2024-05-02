const express = require("express");
const cors = require("cors");

const cars = require("./db");

const app = express();

app.use(cors());

app.get("/api/test", (req, res) => {
  return res.send("Hey");
});

app.get("/api/random-cars", (req, res) => {
  const response = cars
    .sort(() => Math.random() - Math.random())
    .filter((item, i) => i < 6);
  return res.send(response);
});

app.get("/api/cars/:id", (req, res) => {
  const response = cars.find((item) => item.id === Number(req.params.id));

  return res.send(response);
});

app.get("/api/cars", (req, res) => {
  return res.send(cars);
});

app.get("/api/search", (req, res) => {
  const filter = req.query;

  let newCars = cars;
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
