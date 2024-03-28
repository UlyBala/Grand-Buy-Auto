import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {MainComponent} from "./components/main/main.component";
import {LogInComponent} from "./components/log-in/log-in.component";

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path: 'log-in',
    component: LogInComponent
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
