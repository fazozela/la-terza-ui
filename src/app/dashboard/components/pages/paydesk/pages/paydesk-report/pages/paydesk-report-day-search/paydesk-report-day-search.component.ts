import { Component } from '@angular/core';
import {
    CancelFormButtonComponent
} from "../../../../../../../../shared/cancel-form-button/cancel-form-button.component";
import {GoBackButtonComponent} from "../../../../../../../../shared/go-back-button/go-back-button.component";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-paydesk-report-day-search',
  standalone: true,
    imports: [
        CancelFormButtonComponent,
        GoBackButtonComponent,
        RouterLink
    ],
  templateUrl: './paydesk-report-day-search.component.html',
  styleUrl: './paydesk-report-day-search.component.css'
})
export class PaydeskReportDaySearchComponent {

}
