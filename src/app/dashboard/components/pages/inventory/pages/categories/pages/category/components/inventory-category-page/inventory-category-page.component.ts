import { Component } from '@angular/core';
import {GoBackButtonComponent} from "../../../../../../../../../../shared/go-back-button/go-back-button.component";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-inventory-category-page',
  standalone: true,
    imports: [
        GoBackButtonComponent,
        RouterLink
    ],
  templateUrl: './inventory-category-page.component.html',
  styleUrl: './inventory-category-page.component.css'
})
export class InventoryCategoryPageComponent {

}
