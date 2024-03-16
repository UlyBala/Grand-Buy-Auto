import {Component, inject, OnInit} from '@angular/core';
import {AutoService} from "../../../services/auto.service";

@Component({
  selector: 'app-supers',
  templateUrl: './supers.component.html',
  styleUrl: './supers.component.scss'
})
export class SupersComponent implements OnInit{
  private autoService = inject(AutoService);

  data: any[]
  ngOnInit() {
    this.data = this.autoService.getSupers()
    console.log(this.data)
  }
}
