import { Component } from '@angular/core';
import {GoBackButtonComponent} from "../../../../../../../../../../shared/go-back-button/go-back-button.component";
import {RouterModule} from "@angular/router";

@Component({
  selector: 'app-product-category-list',
  standalone: true,
  imports: [
    GoBackButtonComponent,
    RouterModule
  ],
  templateUrl: './product-category-list.component.html',
  styleUrl: './product-category-list.component.css'
})
export class ProductCategoryListComponent {

}
