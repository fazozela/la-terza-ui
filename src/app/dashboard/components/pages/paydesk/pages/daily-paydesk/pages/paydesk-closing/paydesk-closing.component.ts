import { Component } from '@angular/core';
import {GoBackButtonComponent} from "../../../../../../../../shared/go-back-button/go-back-button.component";
import {RouterLink} from "@angular/router";
import {
  ShortCancelFormButtonComponent
} from "../../../../../../../../shared/short-cancel-form-button/short-cancel-form-button.component";

@Component({
  selector: 'app-paydesk-closing',
  standalone: true,
  imports: [
    GoBackButtonComponent,
    RouterLink,
    ShortCancelFormButtonComponent
  ],
  templateUrl: './paydesk-closing.component.html',
  styleUrl: './paydesk-closing.component.css'
})
export class PaydeskClosingComponent {

}
