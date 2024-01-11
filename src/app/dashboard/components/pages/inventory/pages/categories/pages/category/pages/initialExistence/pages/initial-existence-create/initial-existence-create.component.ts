import { Component } from '@angular/core';
import {
  GoBackButtonComponent
} from "../../../../../../../../../../../../shared/go-back-button/go-back-button.component";
import {
  CancelFormButtonComponent
} from "../../../../../../../../../../../../shared/cancel-form-button/cancel-form-button.component";
import {RouterModule} from "@angular/router";

@Component({
  selector: 'app-initial-existence-create',
  standalone: true,
  imports: [
    GoBackButtonComponent,
    CancelFormButtonComponent,
    RouterModule
  ],
  templateUrl: './initial-existence-create.component.html',
  styleUrl: './initial-existence-create.component.css'
})
export class InitialExistenceCreateComponent {

}
