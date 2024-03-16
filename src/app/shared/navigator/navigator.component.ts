import {Component} from '@angular/core';
import {typeAutos} from "../../services/data.mock";

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrl: './navigator.component.scss'
})

export class NavigatorComponent {
  typeAutos = typeAutos;
}
