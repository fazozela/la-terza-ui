import { Component } from '@angular/core';
import {UpperCasePipe} from "@angular/common";
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'shared-sidebar',
  standalone: true,
  imports: [
    UpperCasePipe,
    RouterLinkActive,
    RouterLink
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

}
