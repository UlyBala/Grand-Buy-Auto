import {Component, inject, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {AutoService} from "../../services/auto.service";
import {TypeAuto} from "../../interfaces/auto.interfaces";

@Component({
  selector: 'app-details-auto',
  templateUrl: './details-auto.component.html',
  styleUrl: './details-auto.component.scss',
  providers: [AutoService]
})
export class DetailsAutoComponent implements OnInit{
  private activatedRoute = inject(ActivatedRoute)
  private autoService = inject(AutoService)

  data: TypeAuto;
  photos: number;

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      // @ts-ignore
      this.data = this.autoService.getAutoDataById(params['id'])
    })
    this.photos = this.data.photos.length + 1
  }
}
