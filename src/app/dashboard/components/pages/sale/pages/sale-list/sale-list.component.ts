import { Component } from '@angular/core';
import {GoBackButtonComponent} from "../../../../../../shared/go-back-button/go-back-button.component";
import {RouterModule} from "@angular/router";

@Component({
  selector: 'app-sale-list',
  standalone: true,
  imports: [
    GoBackButtonComponent,
    RouterModule
  ],
  templateUrl: './sale-list.component.html',
  styleUrl: './sale-list.component.css'
})
export class SaleListComponent {

}
