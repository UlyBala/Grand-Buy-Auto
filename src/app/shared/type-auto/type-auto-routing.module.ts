import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {DetailsAutoComponent} from "../details-auto/details-auto.component";
import {EmptyRouteComponent} from "../../components/empty-route/empty-route.component";
import {TypeAutoComponent} from "./type-auto.component";

const routes: Routes = [
  {
    path: 'family',
    children: [
      {
        path: '',
        component: TypeAutoComponent,
      },
      {
        path: ':id',
        component: DetailsAutoComponent
      },
    ]
  },

  {
    path: 'first-car',
    children: [
      {
        path: '',
        component: TypeAutoComponent,
      },
      {
        path: ':id',
        component: DetailsAutoComponent
      },
    ]
  },

  {
    path: 'electric',
    children: [
      {
        path: '',
        component: TypeAutoComponent,
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
