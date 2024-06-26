import {Component, inject, Input} from '@angular/core';
import {ListCar} from "../../../interfaces/auto.interfaces";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() item: ListCar;

  private router = inject(Router)
  private activatedRoute = inject(ActivatedRoute)

  public redirectTo(id: string): void {
    this.router.navigate([`${id}`], {relativeTo: this.activatedRoute})
  }

 /*Modal*/
  isModalOpen = false;
  onOpenModal() {
    document.body.classList.add('no-scroll')
    this.isModalOpen = !this.isModalOpen;
  }
}
