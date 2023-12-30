import { Component } from '@angular/core';
import {GoBackButtonComponent} from "../../../../../../shared/go-back-button/go-back-button.component";
import {CancelFormButtonComponent} from "../../../../../../shared/cancel-form-button/cancel-form-button.component";

@Component({
  selector: 'app-product-edit-category',
  standalone: true,
  imports: [
    GoBackButtonComponent,
    CancelFormButtonComponent
  ],
  templateUrl: './product-edit-category.component.html',
  styleUrl: './product-edit-category.component.css'
})
export class ProductEditCategoryComponent {

}
