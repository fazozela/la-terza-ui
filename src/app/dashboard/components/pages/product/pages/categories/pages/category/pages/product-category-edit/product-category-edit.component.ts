import { Component } from '@angular/core';
import {
  CancelFormButtonComponent
} from "../../../../../../../../../../shared/cancel-form-button/cancel-form-button.component";
import {GoBackButtonComponent} from "../../../../../../../../../../shared/go-back-button/go-back-button.component";

@Component({
  selector: 'app-product-category-edit',
  standalone: true,
  imports: [
    CancelFormButtonComponent,
    GoBackButtonComponent
  ],
  templateUrl: './product-category-edit.component.html',
  styleUrl: './product-category-edit.component.css'
})
export class ProductCategoryEditComponent {

}
