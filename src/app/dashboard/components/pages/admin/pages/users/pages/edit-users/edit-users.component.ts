import { Component } from '@angular/core';
import {
    CancelFormButtonComponent
} from "../../../../../../../../shared/cancel-form-button/cancel-form-button.component";
import {GoBackButtonComponent} from "../../../../../../../../shared/go-back-button/go-back-button.component";

@Component({
  selector: 'app-edit-users',
  standalone: true,
    imports: [
        CancelFormButtonComponent,
        GoBackButtonComponent
    ],
  templateUrl: './edit-users.component.html',
  styleUrl: './edit-users.component.css'
})
export class EditUsersComponent {

}
