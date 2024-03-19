import {Component, inject, OnInit} from '@angular/core';
import {AutoService} from "../../../services/auto.service";
import {TypeAuto} from "../../../interfaces/auto.interfaces";

@Component({
  selector: 'app-supers',
  templateUrl: './supers.component.html',
  styleUrl: './supers.component.scss'
})
export class SupersComponent implements OnInit{
  private autoService = inject(AutoService);

  data: TypeAuto[]
  ngOnInit() {
    this.data = this.autoService.getAutoData()
  }
}
