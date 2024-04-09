import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {MainComponent} from "./components/main/main.component";
import {LoginComponent} from "./components/login/login.component";
import {ListCarsComponent} from "./shared/list-cars/list-cars.component";
import {DetailsCarComponent} from "./shared/details-car/details-car.component";
import {EmptyRouteComponent} from "./components/empty-route/empty-route.component";
import {SliderAutosComponent} from "./components/slider-autos/slider-autos.component";
import {SignupComponent} from "./components/signup/signup.component";
import {ForgotPasswordComponent} from "./components/forgot-password/forgot-password.component";
import {AllCarsComponent} from "./components/all-cars/all-cars.component";

const routes: Routes = [
  {
    path: '',
    component: MainComponent,

    children: [
      {
        path: '',
        component: SliderAutosComponent,
      },
      {
        path: 'all-cars',
        children: [
          {
            path: '',
            component: AllCarsComponent
          },
          {
            path: ':id',
            component: DetailsCarComponent
          },
        ]
      },
      {
        path: 'family',
        children: [
          {
            path: '',
            component: ListCarsComponent,
          },
          {
            path: ':id',
            component: DetailsCarComponent
          },
        ]
      },

      {
        path: 'first-car',
        children: [
          {
            path: '',
            component: ListCarsComponent,
          },
          {
            path: ':id',
            component: DetailsCarComponent
          },
        ]
      },

      {
        path: 'electric',
        children: [
          {
            path: '',
            component: ListCarsComponent,
          },
          {
            path: ':id',
            component: DetailsCarComponent
          },
        ]
      },
    ]
  },

  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'password',
    component: ForgotPasswordComponent
  },
  {
    path: '**',
    component: EmptyRouteComponent
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
