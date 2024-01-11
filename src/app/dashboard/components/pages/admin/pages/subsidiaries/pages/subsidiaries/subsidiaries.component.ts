import { Component } from '@angular/core';
import {GoBackButtonComponent} from "../../../../../../../../shared/go-back-button/go-back-button.component";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-subsidiaries',
  standalone: true,
    imports: [
        GoBackButtonComponent,
        RouterLink
    ],
  templateUrl: './subsidiaries.component.html',
  styleUrl: './subsidiaries.component.css'
})
export class SubsidiariesComponent {

}
