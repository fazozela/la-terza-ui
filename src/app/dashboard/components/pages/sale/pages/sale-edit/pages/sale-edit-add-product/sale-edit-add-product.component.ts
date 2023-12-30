import { Component } from '@angular/core';
import {GoBackButtonComponent} from "../../../../../../../../shared/go-back-button/go-back-button.component";
import {RouterLink} from "@angular/router";
import {
    ShortCancelFormButtonComponent
} from "../../../../../../../../shared/short-cancel-form-button/short-cancel-form-button.component";

@Component({
  selector: 'app-sale-edit-add-product',
  standalone: true,
    imports: [
        GoBackButtonComponent,
        RouterLink,
        ShortCancelFormButtonComponent
    ],
  templateUrl: './sale-edit-add-product.component.html',
  styleUrl: './sale-edit-add-product.component.css'
})
export class SaleEditAddProductComponent {

}
