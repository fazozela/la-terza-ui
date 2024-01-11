import { Component } from '@angular/core';
import {GoBackButtonComponent} from "../../../../../../../../shared/go-back-button/go-back-button.component";

@Component({
  selector: 'app-most-selled-products',
  standalone: true,
  imports: [
    GoBackButtonComponent
  ],
  templateUrl: './most-selled-products.component.html',
  styleUrl: './most-selled-products.component.css'
})
export class MostSelledProductsComponent {

}
