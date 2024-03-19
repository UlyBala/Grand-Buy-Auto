import {Component, inject, OnInit} from '@angular/core';
import {AutoService} from "../../../services/auto.service";
import {TypeAuto} from "../../../interfaces/auto.interfaces";

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrl: './sports.component.scss'
})
export class SportsComponent implements OnInit {
  private autoService = inject(AutoService);

  data: TypeAuto[]
  ngOnInit() {
    this.data = this.autoService.getAutoData()
    console.log(this.data)
  }
}
