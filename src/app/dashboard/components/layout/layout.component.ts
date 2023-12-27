import { Component } from '@angular/core';
import {RouterModule, ROUTES} from "@angular/router";
import {NavbarComponent} from "../../../shared/navbar/navbar.component";
import {SidebarComponent} from "../../../shared/sidebar/sidebar.component";
import {routes} from "../../../app.routes";

@Component({
  selector: 'dashboard-layout',
  standalone: true,
  imports: [
    RouterModule,
    NavbarComponent,
    SidebarComponent,
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export default class LayoutComponent {

}
