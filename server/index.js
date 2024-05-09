const express = require("express");
const cors = require("cors");
const { readFileSync, writeFile } = require("fs");
const { carsRouter } = require('./cars');
const {usersRouter} = require('./users');


const app = express();

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

app.use(cors());

app.get("/api/test", (req, res) => {
  return res.send("Hey");
});

carsRouter(app);
usersRouter(app);



app.listen(3001, () => {
  console.log("Server started on the port 3001");
});
