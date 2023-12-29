import { Component } from '@angular/core';
import {CancelFormButtonComponent} from "../../../../../../../shared/cancel-form-button/cancel-form-button.component";
import {GoBackButtonComponent} from "../../../../../../../shared/go-back-button/go-back-button.component";

@Component({
  selector: 'app-inventory-edit-category',
  standalone: true,
    imports: [
        CancelFormButtonComponent,
        GoBackButtonComponent
    ],
  templateUrl: './inventory-edit-category.component.html',
  styleUrl: './inventory-edit-category.component.css'
})
export class InventoryEditCategoryComponent {

}
