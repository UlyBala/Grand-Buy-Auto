import {Component, Input} from '@angular/core';
import {ListCar} from "../../../interfaces/auto.interfaces";

@Component({
  selector: 'app-all-cars-item',
  templateUrl: './all-cars-item.component.html',
  styleUrl: './all-cars-item.component.scss'
})
export class AllCarsItemComponent {
  @Input() item: ListCar;
}
