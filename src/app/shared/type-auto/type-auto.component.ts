import {Component, inject, OnInit} from '@angular/core';
import {AutoService} from "../../services/auto.service";
import {ActivatedRoute, Router} from "@angular/router";
import {TypeAuto} from "../../interfaces/auto.interfaces";

@Component({
  selector: 'app-type-auto',
  templateUrl: './type-auto.component.html',
  styleUrl: './type-auto.component.scss'
})
export class TypeAutoComponent implements OnInit{
  private autoService = inject(AutoService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  data: TypeAuto[]
  param: string
  ngOnInit() {
    this.data = this.autoService.getAutoData()

    const snapshot = this.route.snapshot;
    const urlSegments = snapshot.url.map(segment => segment.path);
    const queryParams = snapshot.queryParams;

    const tree = this.router.createUrlTree(urlSegments, { queryParams });
    this.param = this.router.serializeUrl(tree).slice(1)

    this.data = this.data.filter(item => item.class === this.param)
  }
}
