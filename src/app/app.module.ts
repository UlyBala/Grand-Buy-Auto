import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';
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
import { LocationsFormComponent } from './shared/navigator/filters-form/locations-form/locations-form.component';
import { NewUsedFormComponent } from "./shared/navigator/filters-form/new-used-form/new-used-form.component";
import { PriceFormComponent } from './shared/navigator/filters-form/price-form/price-form.component';
import { YearFromComponent } from './shared/navigator/filters-form/year-from/year-from.component';
import { OdometerFromComponent } from './shared/navigator/filters-form/odometer-from/odometer-from.component';
import { TransmissionFromComponent } from './shared/navigator/filters-form/transmission-from/transmission-from.component';


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
    LocationsFormComponent,
    NewUsedFormComponent,
    PriceFormComponent,
    YearFromComponent,
    OdometerFromComponent,
    TransmissionFromComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
