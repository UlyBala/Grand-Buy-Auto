import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {MainComponent} from "./components/main/main.component";
import {EmptyRouteComponent} from "./components/empty-route/empty-route.component";

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
