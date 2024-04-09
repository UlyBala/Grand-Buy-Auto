import {Component, inject, OnInit} from '@angular/core';
import {AutoService} from "../../services/auto.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ListCar} from "../../interfaces/auto.interfaces";

@Component({
  selector: 'app-list-cars',
  templateUrl: './list-cars.component.html',
  styleUrl: './list-cars.component.scss'
})
export class ListCarsComponent implements OnInit{
  private autoService = inject(AutoService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  public data: ListCar[]
  public param: string

  public visibleItems: ListCar[];
  onPageChange(visibleItems: any[]): void {
    this.visibleItems = visibleItems
  }

  ngOnInit() {
    const snapshot = this.route.snapshot;
    const urlSegments = snapshot.url.map(segment => segment.path);
    const queryParams = snapshot.queryParams;

    const tree = this.router.createUrlTree(urlSegments, { queryParams });
    this.param = this.router.serializeUrl(tree).slice(1)

    this.data = this.autoService
      .getAutoData()
      .filter(item => item.class === this.param)
  }
}
