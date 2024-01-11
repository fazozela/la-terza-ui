import { Component } from '@angular/core';
import {
  CancelFormButtonComponent
} from "../../../../../../../../shared/cancel-form-button/cancel-form-button.component";
import {GoBackButtonComponent} from "../../../../../../../../shared/go-back-button/go-back-button.component";

@Component({
  selector: 'app-add-users',
  standalone: true,
  imports: [
    CancelFormButtonComponent,
    GoBackButtonComponent
  ],
  templateUrl: './create-users.component.html',
  styleUrl: './create-users.component.css'
})
export class CreateUsersComponent {

}
