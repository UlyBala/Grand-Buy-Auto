import {Component, inject, OnInit} from '@angular/core';
import {AutoService} from "../../services/auto.service";
import {ListCar} from "../../interfaces/auto.interfaces";

@Component({
  selector: 'app-slider-autos',
  templateUrl: './slider-autos.component.html',
  styleUrl: './slider-autos.component.scss'
})
export class SliderAutosComponent implements OnInit{
  private autoService = inject(AutoService)
  public data: ListCar[]

  ngOnInit() {
    this.data = this.autoService.getAutoData()
  }

  public currentIndex = 0
  public slideWidth = 400;
  public transformStyles = {
    transform: 'translateX(0)'
  }

  public updateTransformStyles(): void {
    this.transformStyles = {
      transform: `translateX(-${this.currentIndex * this.slideWidth}px)`,
    }
  }

  public next() {
    if (this.currentIndex < this.data.length - 3) {
      this.currentIndex++
    }
    this.updateTransformStyles()
  }

  public prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--
    }
    this.updateTransformStyles()
  }
}
