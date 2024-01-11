import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-report-layout',
  standalone: true,
  imports: [
    RouterOutlet
  ],
  templateUrl: './reports-layout.component.html',
  styleUrl: './reports-layout.component.css'
})
export default class ReportsLayoutComponent {

}
