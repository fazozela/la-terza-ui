import { Component } from '@angular/core';
import {
    CancelFormButtonComponent
} from "../../../../../../../../shared/cancel-form-button/cancel-form-button.component";
import {GoBackButtonComponent} from "../../../../../../../../shared/go-back-button/go-back-button.component";

@Component({
  selector: 'app-create-subsidiaries',
  standalone: true,
    imports: [
        CancelFormButtonComponent,
        GoBackButtonComponent
    ],
  templateUrl: './create-subsidiaries.component.html',
  styleUrl: './create-subsidiaries.component.css'
})
export class CreateSubsidiariesComponent {

}
