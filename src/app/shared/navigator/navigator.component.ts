import {Component} from '@angular/core';
import {navigator} from "../../mock/navigator";

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrl: './navigator.component.scss'
})

export class NavigatorComponent {
  typeAutos = navigator;
}
