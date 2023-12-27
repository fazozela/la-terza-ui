import { Component } from '@angular/core';
import {
  GoBackButtonComponent
} from "../../../../../../../../../../../../../shared/go-back-button/go-back-button.component";
import {
  CancelFormButtonComponent
} from "../../../../../../../../../../../../../shared/cancel-form-button/cancel-form-button.component";

@Component({
  selector: 'app-entries-edit',
  standalone: true,
  imports: [
    GoBackButtonComponent,
    CancelFormButtonComponent
  ],
  templateUrl: './entries-edit.component.html',
  styleUrl: './entries-edit.component.css'
})
export class EntriesEditComponent {

}
