import {Component, inject} from '@angular/core';
import {lifestyle} from "../../mock/lifestyle";
import {AutoService} from "../../services/auto.service";
import {filters} from "../../mock/filter";

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrl: './navigator.component.scss'
})

export class NavigatorComponent {
  private autoService = inject(AutoService)

  public data = this.autoService.getAutoData();
  public lifestyle = lifestyle;
  public filters = filters

  /*Modal*/
  public isModalOpen: boolean = false;
  public typeFilter: string = '';
  onOpenModal(filter: string) {
    this.typeFilter = filter
    this.isModalOpen = !this.isModalOpen;
  }
}
