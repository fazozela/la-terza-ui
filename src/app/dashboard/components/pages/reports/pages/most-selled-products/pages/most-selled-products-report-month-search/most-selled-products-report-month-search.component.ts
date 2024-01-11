import { Component } from '@angular/core';
import {
  CancelFormButtonComponent
} from "../../../../../../../../shared/cancel-form-button/cancel-form-button.component";
import {GoBackButtonComponent} from "../../../../../../../../shared/go-back-button/go-back-button.component";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-report-month-search',
  standalone: true,
  imports: [
    CancelFormButtonComponent,
    GoBackButtonComponent,
    RouterLink
  ],
  templateUrl: './most-selled-products-report-month-search.component.html',
  styleUrl: './most-selled-products-report-month-search.component.css'
})
export class MostSelledProductsReportMonthSearchComponent {

}
