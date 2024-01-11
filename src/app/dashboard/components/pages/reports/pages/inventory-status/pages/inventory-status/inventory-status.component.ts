import { Component } from '@angular/core';
import {GoBackButtonComponent} from "../../../../../../../../shared/go-back-button/go-back-button.component";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-inventory-status',
  standalone: true,
    imports: [
        GoBackButtonComponent,
        RouterLink
    ],
  templateUrl: './inventory-status.component.html',
  styleUrl: './inventory-status.component.css'
})
export class InventoryStatusComponent {

}
