import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-inventory-categories-layout',
  standalone: true,
  imports: [
    RouterOutlet
  ],
  templateUrl: './inventory-categories-layout.component.html',
  styleUrl: './inventory-categories-layout.component.css'
})
export default class InventoryCategoriesLayoutComponent {

}
