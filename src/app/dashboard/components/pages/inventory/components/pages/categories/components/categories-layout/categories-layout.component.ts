import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-categories-layout',
  standalone: true,
  imports: [
    RouterOutlet
  ],
  templateUrl: './categories-layout.component.html',
  styleUrl: './categories-layout.component.css'
})
export default class CategoriesLayoutComponent {

}
