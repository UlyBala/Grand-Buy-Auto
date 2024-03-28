import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss'
})
export class ForgotPasswordComponent {
  public form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  })

  public showRequired = false

  public handleValue() {
    this.showRequired = !this.form.valid;
  }
}
