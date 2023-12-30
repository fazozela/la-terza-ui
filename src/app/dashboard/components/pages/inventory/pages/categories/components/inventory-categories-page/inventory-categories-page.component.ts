import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-inventory-categories-page',
  standalone: true,
    imports: [
        RouterLink
    ],
  templateUrl: './inventory-categories-page.component.html',
  styleUrl: './inventory-categories-page.component.css'
})
export class InventoryCategoriesPageComponent {

}
