import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-users-layout',
  standalone: true,
  imports: [
    RouterOutlet
  ],
  templateUrl: './users-layout.component.html',
  styleUrl: './users-layout.component.css'
})
export default class UsersLayoutComponent {

}
