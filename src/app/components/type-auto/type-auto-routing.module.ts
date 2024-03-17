import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {SportsComponent} from "./sports/sports.component";
import {DetailsAutoComponent} from "../../shared/details-auto/details-auto.component";
import {MusclesComponent} from "./muscles/muscles.component";
import {SupersComponent} from "./supers/supers.component";

const routes: Routes = [
  {
    path: 'sports',
    component: SportsComponent,
    children: [
      {
        path: ':id',
        component: DetailsAutoComponent
      },
    ]
  },

  {
    path: 'muscles',
    component: MusclesComponent,
    children: [
      {
        path: ':id',
        component: DetailsAutoComponent
      },
    ]
  },

  {
    path: 'supers',
    component: SupersComponent,
    children: [
      {
        path: ':id',
        component: DetailsAutoComponent
      }
    ]
  },
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TypeAutoRoutingModule { }
