export interface Lifestyle {
  id: string;
  title: string;
  img: string;
}

export interface TypeAuto {
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
  mainPhoto: string,
  photos: Photos[]
}

export interface Photos {
  photo: string,
}
