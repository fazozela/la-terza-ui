import { Component } from '@angular/core';
import {RouterModule} from "@angular/router";
import {GoBackButtonComponent} from "../../../../../../../../../../../shared/go-back-button/go-back-button.component";

@Component({
  selector: 'app-category-page',
  standalone: true,
  imports: [RouterModule, GoBackButtonComponent],
  templateUrl: './category-page.component.html',
  styleUrl: './category-page.component.css'
})
export class CategoryPageComponent {

}
