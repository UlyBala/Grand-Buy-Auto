import {Component, inject, OnInit} from '@angular/core';
import {AutoService} from "../../../services/auto.service";

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrl: './sports.component.scss'
})
export class SportsComponent implements OnInit {
  private autoService = inject(AutoService);

  data: any[]
  ngOnInit() {
    this.data = this.autoService.getSports()
    console.log(this.data)
  }
}
