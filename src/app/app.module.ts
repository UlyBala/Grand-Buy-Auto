import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SportsRoutingModule } from "./components/type-auto/sports/sports-routing.module";

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { NavigatorComponent } from "./shared/navigator/navigator.component";
import { AppRoutingModule } from "./app-routing.module";
import { SliderAutosComponent } from './components/slider-autos/slider-autos.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { SportsComponent } from "./components/type-auto/sports/sports.component";
import { InfoAutoComponent } from './components/info-auto/info-auto.component';
import { SliderAutosItemComponent } from './components/slider-autos/slider-autos-item/slider-autos-item.component';
import { NavigatorItemComponent } from './shared/navigator/navigator-item/navigator-item.component';
import {SportComponent} from "./components/type-auto/sports/sport/sport.component";
import { MusclesComponent } from './components/type-auto/muscles/muscles.component';
import { SupersComponent } from './components/type-auto/supers/supers.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigatorComponent,
    SliderAutosComponent,
    FooterComponent,
    MainComponent,
    SportsComponent,
    InfoAutoComponent,
    SliderAutosItemComponent,
    NavigatorItemComponent,
    SportComponent,
    MusclesComponent,
    SupersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SportsRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
