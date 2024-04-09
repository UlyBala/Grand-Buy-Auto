import {Component, inject, OnInit} from '@angular/core';
import {AutoService} from "../../services/auto.service";
import {ListCar} from "../../interfaces/auto.interfaces";

@Component({
  selector: 'app-all-cars',
  templateUrl: './all-cars.component.html',
  styleUrl: './all-cars.component.scss'
})
export class AllCarsComponent implements OnInit{
  private autoService = inject(AutoService);
  public data: ListCar[];

  public visibleItems: ListCar[];
  onPageChange(visibleItems: any[]): void {
    this.visibleItems = visibleItems
  }

  ngOnInit() {
    this.data = this.autoService.getAutoData();
  }
}
