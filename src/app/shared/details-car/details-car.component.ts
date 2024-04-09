import {Component, inject, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {AutoService} from "../../services/auto.service";
import {ListCar} from "../../interfaces/auto.interfaces";

@Component({
  selector: 'app-details-car',
  templateUrl: './details-car.component.html',
  styleUrl: './details-car.component.scss',
  providers: [AutoService]
})
export class DetailsCarComponent implements OnInit{
  private activatedRoute = inject(ActivatedRoute)
  private autoService = inject(AutoService)

  data: ListCar;
  photos: number;

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      // @ts-ignore
      this.data = this.autoService.getAutoDataById(params['id'])
    })
    this.photos = this.data.photos.length
  }

  /*Modal*/
  public styleModal = {
    'max-width': '1000px',
    'margin': '12rem auto'
  }

  isModalOpen = false;
  onOpenModal() {
    document.body.classList.add('no-scroll')
    this.isModalOpen = !this.isModalOpen;
  }
}
