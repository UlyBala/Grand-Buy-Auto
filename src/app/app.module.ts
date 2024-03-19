import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TypeAutoRoutingModule } from "./components/type-auto/type-auto-routing.module";
import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { NavigatorComponent } from "./shared/navigator/navigator.component";
import { NavigatorItemComponent } from './shared/navigator/navigator-item/navigator-item.component';
import { SliderAutosComponent } from './components/slider-autos/slider-autos.component';
import { SliderAutosItemComponent } from './components/slider-autos/slider-autos-item/slider-autos-item.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { DetailsAutoComponent } from './shared/details-auto/details-auto.component';
import { SportsComponent } from "./components/type-auto/sports/sports.component";
import { MusclesComponent } from './components/type-auto/muscles/muscles.component';
import { SupersComponent } from './components/type-auto/supers/supers.component';
import { CardComponent } from "./shared/card/card.component";
import { EmptyRouteComponent } from './components/empty-route/empty-route.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigatorComponent,
    NavigatorItemComponent,
    SliderAutosComponent,
    SliderAutosItemComponent,
    FooterComponent,
    MainComponent,
    DetailsAutoComponent,
    SportsComponent,
    MusclesComponent,
    SupersComponent,
    CardComponent,
    EmptyRouteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TypeAutoRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
