import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {SportsComponent} from "./sports/sports.component";
import {DetailsAutoComponent} from "../../shared/details-auto/details-auto.component";
import {MusclesComponent} from "./muscles/muscles.component";
import {SupersComponent} from "./supers/supers.component";
import {EmptyRouteComponent} from "../empty-route/empty-route.component";

const routes: Routes = [
  {
    path: 'sports',
    children: [
      {
        path: '',
        component: SportsComponent,
      },
      {
        path: ':id',
        component: DetailsAutoComponent
      },
    ]
  },

  {
    path: 'muscles',
    children: [
      {
        path: '',
        component: MusclesComponent,
      },
      {
        path: ':id',
        component: DetailsAutoComponent
      },
    ]
  },

  {
    path: 'supers',
    children: [
      {
        path: '',
        component: SupersComponent,
      },
      {
        path: ':id',
        component: DetailsAutoComponent
      }
    ]
  },

  {
    path: '**',
    component: EmptyRouteComponent
  }
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TypeAutoRoutingModule { }
