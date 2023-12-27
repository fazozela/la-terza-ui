import { Component } from '@angular/core';
import {GoBackButtonComponent} from "../../../../../../../shared/go-back-button/go-back-button.component";
import {CancelFormButtonComponent} from "../../../../../../../shared/cancel-form-button/cancel-form-button.component";

@Component({
  selector: 'app-edit-category',
  standalone: true,
  imports: [
    GoBackButtonComponent,
    CancelFormButtonComponent
  ],
  templateUrl: './edit-category.component.html',
  styleUrl: './edit-category.component.css'
})
export default class EditCategoryComponent {

}
