import {Component, inject, OnInit} from '@angular/core';
import {AutoService} from "../../../services/auto.service";
import {TypeAuto} from "../../../interfaces/auto.interfaces";

@Component({
  selector: 'app-muscles',
  templateUrl: './muscles.component.html',
  styleUrl: './muscles.component.scss'
})
export class MusclesComponent implements OnInit{
  private autoService = inject(AutoService);

  data: TypeAuto[]
  ngOnInit() {
    this.data = this.autoService.getAutoData()
  }
}
