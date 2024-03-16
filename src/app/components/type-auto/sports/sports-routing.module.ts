import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {SportsComponent} from "./sports.component";
import {DetailsAutoComponent} from "../../../shared/details-auto/details-auto.component";

const routes: Routes = [
  {
    path: '',
    component: SportsComponent
  },
  {
    path: 'auto_info',
    component: DetailsAutoComponent
  }
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SportsRoutingModule { }
