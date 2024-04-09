import {Component, Input} from '@angular/core';
import {Filter} from "../../../../interfaces/auto.interfaces";

@Component({
  selector: 'app-from-to-form',
  templateUrl: './from-to-form.component.html',
  styleUrl: './from-to-form.component.scss'
})
export class FromToFormComponent {
  @Input() data: Filter;

  public isOpenMin = false;
  public isOpenMax = false;
  onClickInputMin() {
    this.isOpenMin = !this.isOpenMin
    this.isOpenMax = false
  }

  onClickInputMax() {
    this.isOpenMax = !this.isOpenMax
    this.isOpenMin = false
  }

  public itemMin: string = ''
  getDataMin(item: string) {
    this.itemMin = item
    this.isOpenMin = false
  }

  public itemMax: string = ''
  getDataMax(item: string) {
    this.itemMax = item
    this.isOpenMax = false
  }
}
