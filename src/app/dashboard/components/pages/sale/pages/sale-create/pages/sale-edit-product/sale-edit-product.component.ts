import { Component } from '@angular/core';
import {GoBackButtonComponent} from "../../../../../../../../shared/go-back-button/go-back-button.component";
import {
  ShortCancelFormButtonComponent
} from "../../../../../../../../shared/short-cancel-form-button/short-cancel-form-button.component";
import {RouterModule} from "@angular/router";

@Component({
  selector: 'app-sale-edit-product',
  standalone: true,
  imports: [
    GoBackButtonComponent,
    ShortCancelFormButtonComponent,
    RouterModule
  ],
  templateUrl: './sale-edit-product.component.html',
  styleUrl: './sale-edit-product.component.css'
})
export class SaleEditProductComponent {

}
