import { Component } from '@angular/core';
import {
  GoBackButtonComponent
} from "../../../../../../../../../../../../../shared/go-back-button/go-back-button.component";
import {RouterModule} from "@angular/router";

@Component({
  selector: 'app-initial-existence-list',
  standalone: true,
  imports: [
    GoBackButtonComponent,
    RouterModule
  ],
  templateUrl: './initial-existence-list.component.html',
  styleUrl: './initial-existence-list.component.css'
})
export class InitialExistenceListComponent {

}
