import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TypeAutoRoutingModule } from "./shared/type-auto/type-auto-routing.module";
import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { NavigatorComponent } from "./shared/navigator/navigator.component";
import { NavigatorItemComponent } from './shared/navigator/navigator-item/navigator-item.component';
import { SliderAutosComponent } from './components/slider-autos/slider-autos.component';
import { SliderAutosItemComponent } from './components/slider-autos/slider-autos-item/slider-autos-item.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { TypeAutoComponent } from './shared/type-auto/type-auto.component';
import { CardComponent } from "./shared/card/card.component";
import { DetailsAutoComponent } from './shared/details-auto/details-auto.component';
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
    CardComponent,
    EmptyRouteComponent,
    TypeAutoComponent
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
