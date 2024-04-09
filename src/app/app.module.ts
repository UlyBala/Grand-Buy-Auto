import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { NavigatorComponent } from "./shared/navigator/navigator.component";
import { LifestyleComponent } from './shared/navigator/lifestyle/lifestyle.component';
import { SliderAutosComponent } from './components/slider-autos/slider-autos.component';
import { SliderAutosItemComponent } from './components/slider-autos/slider-autos-item/slider-autos-item.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { ListCarsComponent } from './shared/list-cars/list-cars.component';
import { EmptyRouteComponent } from './components/empty-route/empty-route.component';
import { CardComponent } from "./shared/list-cars/card/card.component";
import { DetailsCarComponent } from './shared/details-car/details-car.component';
import { FormComponent } from './shared/form/form.component';
import { ModalComponent } from './shared/modal/modal.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { AllCarsComponent } from './components/all-cars/all-cars.component';
import { AllCarsItemComponent } from './components/all-cars/all-cars-item/all-cars-item.component';
import { PaginationComponent } from './shared/pagination/pagination.component';
import { OneInputFormComponent } from './shared/navigator/filters-form/one-input-form/one-input-form.component';
import { CheckboxFormComponent } from "./shared/navigator/filters-form/checkbox-form/checkbox-form.component";
import { FromToFormComponent } from './shared/navigator/filters-form/from-to-form/from-to-form.component';
import { SearchFormComponent } from './shared/navigator/search-form/search-form.component';
import { SliderComponent } from './shared/slider/slider.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigatorComponent,
    LifestyleComponent,
    SliderAutosComponent,
    SliderAutosItemComponent,
    FooterComponent,
    MainComponent,
    EmptyRouteComponent,
    ListCarsComponent,
    CardComponent,
    DetailsCarComponent,
    FormComponent,
    ModalComponent,
    LoginComponent,
    SignupComponent,
    ForgotPasswordComponent,
    AllCarsComponent,
    AllCarsItemComponent,
    PaginationComponent,
    OneInputFormComponent,
    CheckboxFormComponent,
    FromToFormComponent,
    SearchFormComponent,
    SliderComponent,
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
