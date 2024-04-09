import {Component, Input} from '@angular/core';
import {Filter} from "../../../../interfaces/auto.interfaces";

@Component({
  selector: 'app-one-input-form',
  templateUrl: './one-input-form.component.html',
  styleUrl: './one-input-form.component.scss'
})
export class OneInputFormComponent {
  @Input() data: Filter;

  public item: string = ''
  public isOpen = false;

  getData(item: string) {
    this.item = item
    this.isOpen = false
  }

  onClickInput() {
    this.isOpen = !this.isOpen
  }
}
