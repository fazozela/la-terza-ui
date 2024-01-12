import { Component } from '@angular/core';
import {GoBackButtonComponent} from "../../../../../../../../shared/go-back-button/go-back-button.component";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-paydesk-summary',
  standalone: true,
  imports: [
    GoBackButtonComponent,
    RouterLink
  ],
  templateUrl: './paydesk-summary.component.html',
  styleUrl: './paydesk-summary.component.css'
})
export class PaydeskSummaryComponent {

}
