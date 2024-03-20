export interface Navigator {
  id: string;
  title: string;
  img: string;
}

export interface TypeAuto {
  id: string,
  class: string,
  title: string,
  price: string,
  mainPhoto: string,
  photos: Photos[]
}

export interface Photos {
  photo: string,
}
