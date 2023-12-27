import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-inventory-layout',
  standalone: true,
  imports: [
    RouterOutlet
  ],
  templateUrl: './inventory-layout.component.html',
  styleUrl: './inventory-layout.component.css'
})
export default class InventoryLayoutComponent {

}
