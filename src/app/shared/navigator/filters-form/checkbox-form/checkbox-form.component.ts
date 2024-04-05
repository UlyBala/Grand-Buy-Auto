import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-checkbox-form',
  templateUrl: './checkbox-form.component.html',
  styleUrl: './checkbox-form.component.scss'
})
export class CheckboxFormComponent {
  @Input() title: string;
  @Input() data: string[];
}
