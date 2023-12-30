import { Component } from '@angular/core';
import {GoBackButtonComponent} from "../../../../../../../../shared/go-back-button/go-back-button.component";
import {RouterLink} from "@angular/router";
import {
  ShortCancelFormButtonComponent
} from "../../../../../../../../shared/short-cancel-form-button/short-cancel-form-button.component";

@Component({
  selector: 'app-sale-edit-edit-product',
  standalone: true,
  imports: [
    GoBackButtonComponent,
    RouterLink,
    ShortCancelFormButtonComponent
  ],
  templateUrl: './sale-edit-edit-product.component.html',
  styleUrl: './sale-edit-edit-product.component.css'
})
export class SaleEditEditProductComponent {

}
