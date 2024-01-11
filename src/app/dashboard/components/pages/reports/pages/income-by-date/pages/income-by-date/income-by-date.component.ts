import { Component } from '@angular/core';
import {GoBackButtonComponent} from "../../../../../../../../shared/go-back-button/go-back-button.component";

@Component({
  selector: 'app-income-by-date',
  standalone: true,
    imports: [
        GoBackButtonComponent
    ],
  templateUrl: './income-by-date.component.html',
  styleUrl: './income-by-date.component.css'
})
export class IncomeByDateComponent {

}
