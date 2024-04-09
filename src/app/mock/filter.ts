import {Filter, SearchInput} from "../interfaces/auto.interfaces";

export const searchInput: SearchInput[] = [
  {
    title: 'Brand',
    placeholder: 'All Brands',
    onClickInput: true,
    dataList: [
      'Jeep',
      'Audi',
      'BWM',
      'Volkswagen',
      'Toyota',
      'Hyundai',
    ]
  },

  {
    title: 'Model',
    placeholder: 'All Models',
    onClickInput: true,
    dataList: [
      'M1',
      'M2',
      'M3',
      'M350',
      'M400',
      'G500',
    ],
  },

  {
    title: 'Body Type',
    placeholder: 'All Body Types',
    onClickInput: true,
    dataList: [
      'Bus',
      'Cab Chassis',
      'Convertible',
      'Coupe',
      'Hatch',
      'Light Truck',
    ],
  },

  {
    title: 'Keyword',
    placeholder: 'Search by Keyword',
    onClickInput: false,
  }
]



export const filters: Filter[] = [
  {
    title: 'Locations',
    dataList: [
      'Astana',
      'Almaty',
      'Shymkent',
    ]
  },
  {
    title: 'New And Used',
    dataList: [
      'New',
      'Used, Demo & Near New'
    ]
  },
  {
    title: 'Prices',
    dataList: [
      '$3,000',
      '$5,000',
      '$7,000',
      '$10,000',
    ]
  },
  {
    title: 'Years',
    dataList: [
      '2024',
      '2023',
      '2022',
      '2021'
    ]
  },
  {
    title: 'Odometers',
    dataList: [
      '10,000 km',
      '20,000 km',
      '40,000 km',
      '60,000 km',
    ]
  },
  {
    title: 'Transmission',
    dataList: [
      'Automatic',
      'Manual',
    ]
  },
]
