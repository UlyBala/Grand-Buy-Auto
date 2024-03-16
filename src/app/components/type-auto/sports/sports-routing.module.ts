import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {SportsComponent} from "./sports.component";
import {InfoAutoComponent} from "../../info-auto/info-auto.component";

const routes: Routes = [
  {
    path: '',
    component: SportsComponent
  },
  {
    path: 'auto_info',
    component: InfoAutoComponent
  }
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SportsRoutingModule { }
