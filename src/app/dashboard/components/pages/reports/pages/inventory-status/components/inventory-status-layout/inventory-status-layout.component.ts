import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-reports-layout',
  standalone: true,
  imports: [
    RouterOutlet
  ],
  templateUrl: './inventory-status-layout.component.html',
  styleUrl: './inventory-status-layout.component.css'
})
export default class InventoryStatusLayoutComponent {

}
