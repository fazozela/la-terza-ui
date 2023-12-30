import { Component } from '@angular/core';
import {CancelFormButtonComponent} from "../../../../../../shared/cancel-form-button/cancel-form-button.component";
import {GoBackButtonComponent} from "../../../../../../shared/go-back-button/go-back-button.component";

@Component({
  selector: 'app-inventory-create-category',
  standalone: true,
    imports: [
        CancelFormButtonComponent,
        GoBackButtonComponent
    ],
  templateUrl: './inventory-create-category.component.html',
  styleUrl: './inventory-create-category.component.css'
})
export class InventoryCreateCategoryComponent {

}
