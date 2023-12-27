import { Component } from '@angular/core';
import {
  GoBackButtonComponent
} from "../../../../../../../../../../../../../shared/go-back-button/go-back-button.component";
import {
  CancelFormButtonComponent
} from "../../../../../../../../../../../../../shared/cancel-form-button/cancel-form-button.component";

@Component({
  selector: 'app-decreases-edit',
  standalone: true,
  imports: [
    GoBackButtonComponent,
    CancelFormButtonComponent
  ],
  templateUrl: './decreases-edit.component.html',
  styleUrl: './decreases-edit.component.css'
})
export class DecreasesEditComponent {

}
