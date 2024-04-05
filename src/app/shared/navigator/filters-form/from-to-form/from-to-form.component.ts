import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-from-to-form',
  templateUrl: './from-to-form.component.html',
  styleUrl: './from-to-form.component.scss'
})
export class FromToFormComponent {
  @Input() data: string[];
  @Input() title: string;

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
  getDataMax(price: string) {
    this.itemMin = price
    this.isOpenMax = false
  }
}
