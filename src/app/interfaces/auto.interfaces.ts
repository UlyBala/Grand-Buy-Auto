export interface Navigator {
  id: string;
  title: string;
}

export interface TypeAuto {
  id: string,
  class: string,
  title: string,
  bodyStyle: string,
  capacity: string,
  description: string,
  manufacturer: string,
  price: string,
  mainPhoto: string,
  photos: Photos[]
}

export interface Photos {
  photo: string,
}
