import { Component } from '@angular/core';
import {GoBackButtonComponent} from "../../../../../../shared/go-back-button/go-back-button.component";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-sale-view',
  standalone: true,
  imports: [
    GoBackButtonComponent,
    RouterLink
  ],
  templateUrl: './sale-view.component.html',
  styleUrl: './sale-view.component.css'
})
export class SaleViewComponent {

}
