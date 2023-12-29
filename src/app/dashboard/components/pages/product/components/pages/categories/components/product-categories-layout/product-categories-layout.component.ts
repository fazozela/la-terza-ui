import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-product-categories-layout',
  standalone: true,
  imports: [
    RouterOutlet
  ],
  templateUrl: './product-categories-layout.component.html',
  styleUrl: './product-categories-layout.component.css'
})
export default class ProductCategoriesLayoutComponent {

}
