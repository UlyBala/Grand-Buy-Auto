import {Component, Input} from '@angular/core';
import {Lifestyle} from "../../../interfaces/auto.interfaces";

@Component({
  selector: 'app-lifestyle',
  templateUrl: './lifestyle.component.html',
  styleUrl: './lifestyle.component.scss'
})
export class LifestyleComponent {
  @Input() auto: Lifestyle
}
