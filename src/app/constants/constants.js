// HOMEWORK
// export const carModels = ['Sedan', 'Hatchback', 'Jeep'];
// export const location = ['Tbilisi', 'Batumi', 'Outside Country', 'Space'];
// export const carFuel = ['Petrol', 'Hybrid', 'Electric', 'Diesel'];

export const defaultFuel = [
  {
    name: "Any",
    selected: true,
  },
  {
    name: "Petrol",
    selected: false,
  },
  {
    name: "Hybrid",
    selected: false,
  },
  {
    name: "Electric",
    selected: false,
  },
  {
    name: "Diesel",
    selected: false,
  },
];

export const defaultLocation = [
  {
    name: "Anywhere",
    selected: true,
  },
  {
    name: "Tbilisi",
    selected: false,
  },
  {
    name: "Batumi",
    selected: false,
  },
  {
    name: "On The Way",
    selected: false,
  },
];

export const defaultYears = [
  {
    name: "All",
    value: null,
    selected: true,
  },
  {
    name: "2012",
    value: 2012,
    selected: false,
  },
  {
    name: "2013",
    value: 2013,
    selected: false,
  },
  {
    name: "2014",
    value: 2014,
    selected: false,
  },
  {
    name: "2015",
    value: 2015,
    selected: false,
  },
  {
    name: "2016",
    value: 2016,
    selected: false,
  },
  {
    name: "2017",
    value: 2017,
    selected: false,
  },
  {
    name: "2018",
    value: 2018,
    selected: false,
  },
  {
    name: "2019",
    value: 2019,
    selected: false,
  },
];

export const carModels = [
  {
    name: "All",
    selected: true,
  },
  {
    name: "Sedan",
    selected: false,
  },
  {
    name: "Hatchback",
    selected: false,
  },
  {
    name: "Jeep",
    selected: false,
  },
  {
    name: "Coupe",
    selected: false,
  },
];

export const defaultCarPrices = [
  {
    name: "All",
    maxValue: null,
    selected: true,
  },
  {
    name: "0-5000",
    minValue: 0,
    maxValue: 5000,
    selected: false,
  },
  {
    name: "5001 - 10000",
    minValue: 5001,
    maxValue: 10000,
    selected: false,
  },
  {
    name: "10001-15000",
    minValue: 10001,
    maxValue: 15000,
    selected: false,
  },
  {
    name: "15000-20000",
    minValue: 15001,
    maxValue: 20000,
    selected: false,
  },
];

export const defaultModels = [
  // TODO you should add more Car brands
  {
    name: "---",
    selected: true,
  },
  {
    name: "Audi",
    selected: false,
  },
  {
    name: "BMW", // X6, X7 ...
    selected: false,
  },
  {
    name: "Toyota", // Prius, Corrola...
    selected: false,
  },
  {
    name: "Mazda",
    selected: false,
  },
  {
    name: "Ducati",
    selected: false,
  },
  {
    name: "Volkswagen",
    selected: false,
  },
];

export const defaultCurrency = [
  {
    name: "$",
    selected: true,
  },
  {
    name: "₾",
    selected: false,
  },
];

export const defaultTransmition = [
  {
    name: "Any",
    selected: true,
  },
  {
    name: "Automatic",
    selected: false,
  },
  {
    name: "Manual",
    selected: false,
  },
  {
    name: "Tiptronic",
    selected: false,
  },
];

export const defaultSelectedCarModels = [
  // TODO you should add more Car Models
  {
    name: "---",
    selected: true,
  },
  {
    name: "X6",
    madeByKey: "BMW",
    selected: false,
  },
  {
    name: "X7",
    madeByKey: "BMW",
    selected: false,
  },
  {
    name: "Prius",
    madeByKey: "Toyota",
    selected: false,
  },
  {
    name: "Corola",
    madeByKey: "Toyota",
    selected: false,
  },
];

export const logo = "./logo.jpeg";
