import { Component } from '@angular/core';
import {
    CancelFormButtonComponent
} from "../../../../../../../../shared/cancel-form-button/cancel-form-button.component";
import {GoBackButtonComponent} from "../../../../../../../../shared/go-back-button/go-back-button.component";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-sale-edit',
  standalone: true,
    imports: [
        CancelFormButtonComponent,
        GoBackButtonComponent,
        RouterLink
    ],
  templateUrl: './sale-edit.component.html',
  styleUrl: './sale-edit.component.css'
})
export class SaleEditComponent {

}
