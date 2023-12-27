import { Component } from '@angular/core';
import {GoBackButtonComponent} from "../../../../../../../shared/go-back-button/go-back-button.component";
import {CancelFormButtonComponent} from "../../../../../../../shared/cancel-form-button/cancel-form-button.component";

@Component({
  selector: 'app-create-category',
  standalone: true,
  imports: [
    GoBackButtonComponent,
    CancelFormButtonComponent
  ],
  templateUrl: './create-category.component.html',
  styleUrl: './create-category.component.css'
})
export default class CreateCategoryComponent {

}
