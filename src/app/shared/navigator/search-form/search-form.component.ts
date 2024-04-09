import {Component, Input} from '@angular/core';
import {SearchInput} from "../../../interfaces/auto.interfaces";

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrl: './search-form.component.scss'
})
export class SearchFormComponent {
  @Input() title: string;
  @Input() data: SearchInput;

  public item: string = ''
  public isOpen = false;

  getData(item: string) {
    this.item = item
    this.isOpen = false
  }

  onClickInput() {
    if (this.data.onClickInput) {
      this.isOpen = !this.isOpen;
    }
  }
}
