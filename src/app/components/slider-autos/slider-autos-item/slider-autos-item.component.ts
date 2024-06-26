import {Component, Input, OnInit} from '@angular/core';
import {ListCar} from "../../../interfaces/auto.interfaces";

@Component({
  selector: 'app-slider-autos-item',
  templateUrl: './slider-autos-item.component.html',
  styleUrl: './slider-autos-item.component.scss'
})
export class SliderAutosItemComponent{
  @Input() item: ListCar;
}
