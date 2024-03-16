import {Component, inject, OnInit} from '@angular/core';
import {AutoService} from "../../../services/auto.service";

@Component({
  selector: 'app-muscles',
  templateUrl: './muscles.component.html',
  styleUrl: './muscles.component.scss'
})
export class MusclesComponent implements OnInit{
  private autoService = inject(AutoService);

  data: any[]
  ngOnInit() {
    this.data = this.autoService.getMuscle()
    console.log(this.data)
  }
}
