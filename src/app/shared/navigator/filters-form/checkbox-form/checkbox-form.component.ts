import {Component, Input} from '@angular/core';
import {Filter} from "../../../../interfaces/auto.interfaces";

@Component({
  selector: 'app-checkbox-form',
  templateUrl: './checkbox-form.component.html',
  styleUrl: './checkbox-form.component.scss'
})
export class CheckboxFormComponent {
  @Input() data: Filter;
}
