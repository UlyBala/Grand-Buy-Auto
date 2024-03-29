import { Injectable } from '@angular/core';
import {TypeAuto} from "../interfaces/auto.interfaces";
import {autoData} from "../mock/auto-data";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AutoService {
  getAutoData() {
    return autoData
  }
  getAutoDataById(id: string): TypeAuto | Error {
    for (let i = 0; i < autoData.length; i++) {
      if (autoData[i].id === id) {
        return autoData[i];
      }
    }
    return Error('Not found')
  }
}
