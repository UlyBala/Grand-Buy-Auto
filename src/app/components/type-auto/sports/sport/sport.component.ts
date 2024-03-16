import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-sport',
  templateUrl: './sport.component.html',
  styleUrl: './sport.component.scss'
})
export class SportComponent {
  @Input() item: any;
}
