export const cars = [
    {
      img: 'https://static.my.ge/myauto/photos/3/0/8/3/1/thumbs/102138035_1.jpg?v=1',
      type: 'Car',
      city: 'On a way',
      year: 2014,
      madeBy: 'Toyota',
      model: 'Prius',
      price: 17300,
      currency: '$',
      labels: ['Sedan', 'Hybrid', 'Automatic', 'AWD', '4Door']
    },
    {
      img: 'https://static.my.ge/myauto/photos/3/1/9/3/1/large/102139135_1.jpg?v=0',
      type: 'Car',
      city: 'Tbilisi',
      year: 2021,
      madeBy: 'BMW',
      model: 'X6',
      price: 72500,
      currency: '$',
      labels: ['Jeep', 'Petrol', 'Tiptronic', 'AWD', '4Door']
    },
    {
      img: 'https://static.my.ge/myauto/photos/0/0/1/7/4/large/100471007_1.jpg?v=5',
      type: 'Car',
      city: 'Tbilisi',
      year: 2015,
      madeBy: 'BMW',
      model: 'X5',
      price: 23500,
      currency: '$',
      labels: ['Jeep', 'Petrol', 'Tiptronic', 'AWD', '4Door']
    },
    {
      img: 'https://static.my.ge/myauto/photos/1/2/5/6/0/large/102065215_2.jpg?v=2',
      type: 'Car',
      city: 'Tbilisi',
      year: 2018,
      madeBy: 'toyota',
      model: 'Camry',
      price: 19000,
      currency: '$',
      labels: ['Sedan', 'Hybrid', 'Tiptronic', 'FWD', '4Door']
    },
    {
      img: 'https://static.my.ge/myauto/photos/1/2/2/3/2/large/102232215_1.jpg?v=1',
      type: 'Car',
      city: 'Tbilisi',
      year: 2022,
      madeBy: 'Volkswagen',
      model: 'GTI',
      price: 23000,
      currency: '$',
      labels: ['Sedan', 'Petrol', 'Manual', 'FWD', '4Door']
    },
    {
      img: 'https://static.my.ge/myauto/photos/2/2/2/1/1/large/98112226_1.jpg?v=56',
      type: 'Car',
      city: 'Tbilisi',
      year: 2023,
      madeBy: 'Mazda',
      model: 'CX-50',
      price: 29500,
      currency: '$',
      labels: ['Jeep', 'Petrol', 'Automatic', 'AWD', '4Door']
    },
    {
      img: 'https://static.my.ge/myauto/photos/1/6/7/7/8/large/101877619_1.jpg?v=1',
      type: 'Car',
      city: 'Tbilisi',
      year: 2015,
      madeBy: 'BMW',
      model: '435',
      price: 15500,
      currency: '$',
      labels: ['Coupe', 'Petrol', 'Tiptronic', 'RWD', '4Door']
    },
    {
      img: 'https://static.my.ge/myauto/photos/1/9/2/1/2/large/98212914_1.jpg?v=14',
      type: 'Bike',
      city: 'On The Way',
      year: 2022,
      madeBy: 'Ducati',
      model: 'Pinagle V4',
      price: 12500,
      currency: '$',
      labels: ['Petrol', '1300cc']
    },
    {
      img: 'https://static.my.ge/myauto/photos/9/7/5/3/2/large/101235791_1.jpg?v=0',
      type: 'Bike',
      city: 'On The Way',
      year: 2022,
      madeBy: 'BMW',
      model: 'S1000',
      price: 22400,
      currency: '$',
      labels: ['Petrol', '1000cc']
    },
    {
      img: 'https://static.my.ge/myauto/photos/6/9/0/8/0/large/101080963_1.jpg?v=4',
      type: 'Other',
      city: 'Tbilisi',
      year: 2023,
      madeBy: 'Lonking',
      model: 'LG25DT',
      price: 220000,
      currency: '$',
      labels: ['Diesel', '2Door']
    }
  ];

export const carModels = ['Sedan', 'Hatchback', 'Jeep'];
export const carPrices = ['0-5000', '72500', '10001-15000', '15001-20000']
export const location = ['Tbilisi', 'Batumi', 'Outside Country', 'Space'];
export const carFuel = ['Petrol', 'Hybrid', 'Electric', 'Diesel'];

export const carPrice = [
  {
    name:'All',
    selected: true
  },{
    name: '5000',
    value: 5000,
    selected: false
  },{
    name: '10000',
    value: 10000,
    selected: false
  },{
    name: '15000',
    value: 15000,
    selected: false
  }
]

export const defaultModels = [
  {
    name: '---',
    selected: true
  },
  {
      name: 'Audi',
      selected: false
  },
  {
      name: 'BMW',
      selected: false
  },
  {
      name: 'Toyota',
      selected: false
  },
  {
      name: 'Mazda',
      selected: false
  },
  {
      name: 'Ducati',
      selected: false
  }
]

export const logo = ('./logo.jpeg')