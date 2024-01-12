import { Component } from '@angular/core';
import {
  CancelFormButtonComponent
} from "../../../../../../../../shared/cancel-form-button/cancel-form-button.component";
import {GoBackButtonComponent} from "../../../../../../../../shared/go-back-button/go-back-button.component";
import {RouterLink} from "@angular/router";
import {
  ShortCancelFormButtonComponent
} from "../../../../../../../../shared/short-cancel-form-button/short-cancel-form-button.component";

@Component({
  selector: 'app-paydesk-start',
  standalone: true,
  imports: [
    CancelFormButtonComponent,
    GoBackButtonComponent,
    RouterLink,
    ShortCancelFormButtonComponent
  ],
  templateUrl: './paydesk-start.component.html',
  styleUrl: './paydesk-start.component.css'
})
export class PaydeskStartComponent {

}
