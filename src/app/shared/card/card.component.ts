import {Component, inject, Input} from '@angular/core';
import {TypeAuto} from "../../interfaces/auto.interfaces";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  /*View details*/
  @Input() item: TypeAuto;

  private router = inject(Router)
  private activatedRoute = inject(ActivatedRoute)

  public redirectTo(id: string): void {
    this.router.navigate([`${id}`], {relativeTo: this.activatedRoute})
  }

 /*Contact btn*/
  isModalOpen = false;
  openModal() {
    this.isModalOpen = !this.isModalOpen;
  }
}
