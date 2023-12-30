import { Component } from '@angular/core';
import {RouterModule} from "@angular/router";
import {
  GoBackButtonComponent
} from "../../../../../../../../../../../../shared/go-back-button/go-back-button.component";

@Component({
  selector: 'app-decreases-list',
  standalone: true,
  imports: [RouterModule, GoBackButtonComponent],
  templateUrl: './decreases-list.component.html',
  styleUrl: './decreases-list.component.css'
})
export class DecreasesListComponent {

}
