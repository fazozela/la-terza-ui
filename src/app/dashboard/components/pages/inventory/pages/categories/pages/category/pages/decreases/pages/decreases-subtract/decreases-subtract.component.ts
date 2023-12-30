import { Component } from '@angular/core';
import {
  GoBackButtonComponent
} from "../../../../../../../../../../../../shared/go-back-button/go-back-button.component";
import {
  CancelFormButtonComponent
} from "../../../../../../../../../../../../shared/cancel-form-button/cancel-form-button.component";

@Component({
  selector: 'app-decreases-subtract',
  standalone: true,
  imports: [
    GoBackButtonComponent,
    CancelFormButtonComponent
  ],
  templateUrl: './decreases-subtract.component.html',
  styleUrl: './decreases-subtract.component.css'
})
export class DecreasesSubtractComponent {

}
