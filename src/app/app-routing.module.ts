import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {MainComponent} from "./components/main/main.component";
import {SportsComponent} from "./components/type-auto/sports/sports.component";
import {MusclesComponent} from "./components/type-auto/muscles/muscles.component";
import {SupersComponent} from "./components/type-auto/supers/supers.component";

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },

  {
    path: 'sports',
    component: SportsComponent
  },

  {
    path: 'muscles',
    component: MusclesComponent
  },

  {
    path: 'supers',
    component: SupersComponent
  },

/*  {
    path: 'classics',
    component: SportsComponent
  },

  {
    path: 'sedans',
    component: SportsComponent
  },*/
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
