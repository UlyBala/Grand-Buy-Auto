import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {DetailsAutoComponent} from "../details-auto/details-auto.component";
import {EmptyRouteComponent} from "../../components/empty-route/empty-route.component";
import {TypeAutoComponent} from "./type-auto.component";

const routes: Routes = [
  {
    path: 'sports',
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
    path: 'muscles',
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
    path: 'supers',
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
