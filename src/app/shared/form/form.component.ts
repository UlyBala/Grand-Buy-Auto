import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  public form = new FormGroup({
   description: new FormControl('I\'m interested, please contact me?'),
   name: new FormControl('', Validators.required),
   email: new FormControl('', [Validators.required, Validators.email]),
   phone: new FormControl('', Validators.required),
  })

  public showRequired = false

  public handleValue() {
    this.showRequired = !this.form.valid;
  }
}
