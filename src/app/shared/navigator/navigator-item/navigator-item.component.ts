import {Component, Input} from '@angular/core';
import {Lifestyle} from "../../../interfaces/auto.interfaces";

@Component({
  selector: 'app-navigator-item',
  templateUrl: './navigator-item.component.html',
  styleUrl: './navigator-item.component.scss'
})
export class NavigatorItemComponent {
  @Input() auto: Lifestyle
}
