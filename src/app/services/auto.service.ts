import { Injectable } from '@angular/core';
import {sports} from "../mock/sports";
import {muscles} from "../mock/muscles";
import {supers} from "../mock/supers";
import {TypeAuto} from "../interfaces/auto.interfaces";

@Injectable({
  providedIn: 'root'
})
export class AutoService {
  getSports() {
    return sports
  }

  getSportsById(id: string): TypeAuto | Error {
    for (let i = 0; i < sports.length; i++) {
      if (sports[i].id === id) {
        return sports[i];
      }
    }
    return Error('Not found')
  }

  getMuscle() {
    return muscles
  }

  getMusclesById(id: string): TypeAuto | Error {
    for (let i = 0; i < muscles.length; i++) {
      if (muscles[i].id === id) {
        return muscles[i];
      }
    }
    return Error('Not found')
  }

  getSupers() {
    return supers
  }

  getSupersById(id: string): TypeAuto | Error {
    for (let i = 0; i < supers.length; i++) {
      if (supers[i].id === id) {
        return supers[i];
      }
    }
    return Error('Not found')
  }
}
