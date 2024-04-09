import { Injectable } from '@angular/core';
import {ListCar} from "../interfaces/auto.interfaces";
import {autoData} from "../mock/auto-data";

@Injectable({
  providedIn: 'root'
})
export class AutoService {
  getAutoData() {
    return autoData
  }
  getAutoDataById(id: string): ListCar | Error {
    for (let i = 0; i < autoData.length; i++) {
      if (autoData[i].id === id) {
        return autoData[i];
      }
    }
    return Error('Not found')
  }
}
