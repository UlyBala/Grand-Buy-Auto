import {Component, inject, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
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
  private activatedRoute = inject(ActivatedRoute)
  private autoService = inject(AutoService)

  // data: TypeAuto | Error;
  data: any;
  id: any;
  ngOnInit() {
    // this.route.paramMap.pipe(
    //   switchMap(params => params.getAll("id"))
    // )
    //   .subscribe(id => {
    //     this.data = this.autoService.getSportsById(id);
    //   });

/*    console.log(this.activatedRoute.snapshot.paramMap.get('id'))*/
/*    this.activatedRoute.paramMap.subscribe((paramMap) => {
      this.id = paramMap.get('id')
      console.log(this.id)
      this.data = this.autoService.getSportsById(this.id)
    })*/

    this.activatedRoute.params.subscribe((params: Params) => {
      console.log(this.activatedRoute)
      this.data = this.autoService.getAutoDataById(params['id'])
    })
  }
}
