import { Component } from '@angular/core';
import {GoBackButtonComponent} from "../../../../../../../../shared/go-back-button/go-back-button.component";
import {RouterModule} from "@angular/router";
import {
  ShortCancelFormButtonComponent
} from "../../../../../../../../shared/short-cancel-form-button/short-cancel-form-button.component";

@Component({
  selector: 'app-sale-add-product',
  standalone: true,
  imports: [
    GoBackButtonComponent,
    RouterModule,
    ShortCancelFormButtonComponent
  ],
  templateUrl: './sale-add-product.component.html',
  styleUrl: './sale-add-product.component.css'
})
export class SaleAddProductComponent {

}
