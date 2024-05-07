// HOMEWORK
// export const carModels = ['Sedan', 'Hatchback', 'Jeep'];
// export const location = ['Tbilisi', 'Batumi', 'Outside Country', 'Space'];
// export const carFuel = ['Petrol', 'Hybrid', 'Electric', 'Diesel'];

// TODO move this constants to backend.

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
    name: "BMW",
    selected: false,
  },
  {
    name: "Toyota",
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
  {
    name: "Honda",
    selected: false,
  },
  {
    name: "Hyndai",
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

export const vehichleType = [
  {
    name: "Any",
    selected: true,
  },
  {
    name: "Car",
    selected: false,
  },
  {
    name: "Motorcycle",
    selected: false,
  },
  {
    name: "Other",
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
    name: "435",
    madeByKey: "BMW",
    selected: false,
  },
  {
    name: "M2",
    madeByKey: "BMW",
    selected: false,
  },
  {
    name: "M3",
    madeByKey: "BMW",
    selected: false,
  },
  {
    name: "M4",
    madeByKey: "BMW",
    selected: false,
  },
  {
    name: "M5",
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
  {
    name: "RAV 4",
    madeByKey: "Toyota",
    selected: false,
  },
  {
    name: "Fit",
    madeByKey: "Honda",
    selected: false,
  },
  {
    name: "Civic",
    madeByKey: "Honda",
    selected: false,
  },
  {
    name: "Type R",
    madeByKey: "Honda",
    selected: false,
  },
  {
    name: "GTI",
    madeByKey: "Volkswagen",
    selected: false,
  },
];

export const defaultSelectedCarModelsTest = [
  {
    name: "Any",
    selected: true,
  },
  {
    name: "BMW",
    selected: false,
    models: [
      { name: "X1", selected: false },
      { name: "X3", selected: false },
      { name: "X5", selected: false },
      { name: "X6", selected: false },
      { name: "X7", selected: false },
      { name: "435", selected: false },
      { name: "M2", selected: false },
      { name: "M3", selected: false },
      { name: "M4", selected: false },
      { name: "M5", selected: false },
    ],
  },
  {
    name: "Toyota",
    selected: false,
    models: [
      { name: "Prius", selected: false },
      { name: "Corola", selected: false },
      { name: "RAV 4", selected: false },
    ],
  },
  {
    name: "Honda",
    selected: false,
    models: [
      { name: "Fit", selected: false },
      { name: "Civic", selected: false },
      { name: "Type R", selected: false },
    ],
  },
  {
    name: "Volkswagen",
    selected: false,
    models: [
      { name: "GTI", selected: false },
      { name: "Beetle", selected: false },
      { name: "Golf", selected: false },
    ],
  },
];

export const logo = "./logo.jpeg";
