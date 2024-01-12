import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-paydesk-page',
  standalone: true,
    imports: [
        RouterLink
    ],
  templateUrl: './paydesk-page.component.html',
  styleUrl: './paydesk-page.component.css'
})
export class PaydeskPageComponent {

}
