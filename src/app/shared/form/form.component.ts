import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent implements OnInit{
  public form = new FormGroup({
   description: new FormControl('I\'m interested, please contact me?'),
   name: new FormControl('', Validators.required),
   email: new FormControl('', [Validators.required, Validators.email]),
   phone: new FormControl('', Validators.required),
  })

  public ngOnInit(): void {
    /*console.log(this.form.controls.name.valid)
    console.log(this.form.get(['name'])?.valid)*/
  }

  public handleValue() {
    if (this.form.valid) {
      console.log(this.form.value)
    } else {

    }
  }
}
