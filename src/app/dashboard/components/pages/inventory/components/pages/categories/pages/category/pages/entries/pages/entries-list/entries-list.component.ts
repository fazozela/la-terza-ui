import { Component } from '@angular/core';
import {RouterModule} from "@angular/router";
import {
  GoBackButtonComponent
} from "../../../../../../../../../../../../../shared/go-back-button/go-back-button.component";

@Component({
  selector: 'app-entries-list',
  standalone: true,
  imports: [RouterModule, GoBackButtonComponent],
  templateUrl: './entries-list.component.html',
  styleUrl: './entries-list.component.css'
})
export class EntriesListComponent {

}
