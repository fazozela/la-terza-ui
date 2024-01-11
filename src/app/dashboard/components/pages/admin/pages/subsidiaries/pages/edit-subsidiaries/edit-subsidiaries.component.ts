import { Component } from '@angular/core';
import {
    CancelFormButtonComponent
} from "../../../../../../../../shared/cancel-form-button/cancel-form-button.component";
import {GoBackButtonComponent} from "../../../../../../../../shared/go-back-button/go-back-button.component";

@Component({
  selector: 'app-edit-subsidiaries',
  standalone: true,
    imports: [
        CancelFormButtonComponent,
        GoBackButtonComponent
    ],
  templateUrl: './edit-subsidiaries.component.html',
  styleUrl: './edit-subsidiaries.component.css'
})
export class EditSubsidiariesComponent {

}
