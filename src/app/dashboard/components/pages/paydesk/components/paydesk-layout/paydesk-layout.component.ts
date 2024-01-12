import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-paydesk-layout',
  standalone: true,
  imports: [
    RouterOutlet
  ],
  templateUrl: './paydesk-layout.component.html',
  styleUrl: './paydesk-layout.component.css'
})
export default class PaydeskLayoutComponent {

}
