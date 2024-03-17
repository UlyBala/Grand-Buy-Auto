import {Component, Input} from '@angular/core';
import {TypeAuto} from "../../interfaces/auto.interfaces";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() item: TypeAuto;
}
