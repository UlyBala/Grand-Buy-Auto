import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";
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
import { EmptyRouteComponent } from './components/empty-route/empty-route.component';
import { CardComponent } from "./shared/card/card.component";
import { DetailsAutoComponent } from './shared/details-auto/details-auto.component';
import { FormComponent } from './shared/form/form.component';
import { ModalComponent } from './shared/modal/modal.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { AllCarsComponent } from './components/all-cars/all-cars.component';
import { AllCarsItemComponent } from './components/all-cars/all-cars-item/all-cars-item.component';
import { PaginationComponent } from './shared/pagination/pagination.component';


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
    EmptyRouteComponent,
    TypeAutoComponent,
    CardComponent,
    DetailsAutoComponent,
    FormComponent,
    ModalComponent,
    LoginComponent,
    SignupComponent,
    ForgotPasswordComponent,
    AllCarsComponent,
    AllCarsItemComponent,
    PaginationComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    TypeAutoRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
