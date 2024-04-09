import {Component, inject} from '@angular/core';
import {lifestyle} from "../../mock/lifestyle";
import {AutoService} from "../../services/auto.service";
import {
  filters,
  searchInput
} from "../../mock/filter";

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrl: './navigator.component.scss'
})

export class NavigatorComponent {
  private autoService = inject(AutoService)

  public data = this.autoService.getAutoData();
  public lifestyle = lifestyle;
  public filters = filters;
  public searchInput = searchInput;

  /*Modal*/
  public isModalOpen: boolean = false;
  public typeFilter: string = '';
  onOpenModal(filter: string) {
    document.body.classList.add('no-scroll');
    this.typeFilter = filter;
    this.isModalOpen = !this.isModalOpen;
  }
}
