import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ListCar} from "../../interfaces/auto.interfaces";

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss'
})
export class SliderComponent {
  @Input() item: ListCar;
  @Input() slideWidth: number
  @Output() idEvent = new EventEmitter<string>()

  onSendId(id: string) {
    this.idEvent.emit(id);
    console.log(id)
  }

  currentIndex = 0;
  next(): void {
    if (this.currentIndex < this.item.photos.length - 1) {
      this.currentIndex++;
    }
  }

  prev(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }
}
