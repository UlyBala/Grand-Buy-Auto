import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {MainComponent} from "./components/main/main.component";
import {LoginComponent} from "./components/login/login.component";
import {TypeAutoComponent} from "./shared/type-auto/type-auto.component";
import {DetailsAutoComponent} from "./shared/details-auto/details-auto.component";
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
            component: DetailsAutoComponent
          },
        ]
      },
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
