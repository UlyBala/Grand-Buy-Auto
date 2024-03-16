import { Injectable } from '@angular/core';
import {sports} from "../mock/sports";
import {muscles} from "../mock/muscles";
import {supers} from "../mock/supers";

@Injectable({
  providedIn: 'root'
})
export class AutoService {
  constructor() { }

  getSports() {
    return sports
  }

  getMuscle() {
    return muscles
  }

  getSupers() {
    return supers
  }
}
