import { Component } from '@angular/core';
import {GoBackButtonComponent} from "../../../../../../../../../../../shared/go-back-button/go-back-button.component";
import {
  CancelFormButtonComponent
} from "../../../../../../../../../../../shared/cancel-form-button/cancel-form-button.component";

@Component({
  selector: 'app-product-category-create',
  standalone: true,
  imports: [
    GoBackButtonComponent,
    CancelFormButtonComponent
  ],
  templateUrl: './product-category-create.component.html',
  styleUrl: './product-category-create.component.css'
})
export class ProductCategoryCreateComponent {

}
