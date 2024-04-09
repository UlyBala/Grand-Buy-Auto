export interface Lifestyle {
  id: string;
  title: string;
  img: string;
}


export interface ListCar {
  id: string,
  class: string,
  title: string,
  price: string,
  brand: string,
  model: string,
  year: string,
  bodyType: string,
  transmission: string,
  engine: string,
  odometer: string,
  photos: Photos[]
}
export interface Photos {
  photo: string,
}


export interface SearchInput {
  title: string,
  placeholder: string,
  onClickInput: boolean,
  dataList?: string[]
}

export interface Filter {
  title: string,
  dataList?: string[]
}


