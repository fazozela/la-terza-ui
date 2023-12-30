import { Component } from '@angular/core';
import {GoBackButtonComponent} from "../../../../../../../../shared/go-back-button/go-back-button.component";
import {RouterModule} from "@angular/router";
import {
  CancelFormButtonComponent
} from "../../../../../../../../shared/cancel-form-button/cancel-form-button.component";

@Component({
  selector: 'app-sale-create',
  standalone: true,
  imports: [
    GoBackButtonComponent,
    RouterModule,
    CancelFormButtonComponent
  ],
  templateUrl: './sale-create.component.html',
  styleUrl: './sale-create.component.css'
})
export class SaleCreateComponent {

}
