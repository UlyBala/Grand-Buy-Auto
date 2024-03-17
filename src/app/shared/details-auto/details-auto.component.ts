import {Component, inject, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {switchMap} from "rxjs";
import {AutoService} from "../../services/auto.service";
import {TypeAuto} from "../../interfaces/auto.interfaces";

@Component({
  selector: 'app-details-auto',
  templateUrl: './details-auto.component.html',
  styleUrl: './details-auto.component.scss',
  providers: [AutoService]
})
export class DetailsAutoComponent implements OnInit{
  private route = inject(ActivatedRoute)
  private autoService = inject(AutoService)

  // data: TypeAuto | Error;
  data: any;

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap(params => params.getAll("id"))
    )
      .subscribe(id => {
        this.data = this.autoService.getSportsById(id);
      });
  }
}
