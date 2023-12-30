import { Component } from '@angular/core';
import {
  GoBackButtonComponent
} from "../../../../../../../../../../../../shared/go-back-button/go-back-button.component";
import {
  CancelFormButtonComponent
} from "../../../../../../../../../../../../shared/cancel-form-button/cancel-form-button.component";

@Component({
  selector: 'app-initial-existence-edit',
  standalone: true,
  imports: [
    GoBackButtonComponent,
    CancelFormButtonComponent
  ],
  templateUrl: './initial-existence-edit.component.html',
  styleUrl: './initial-existence-edit.component.css'
})
export class InitialExistenceEditComponent {

}
