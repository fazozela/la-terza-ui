import {Component, inject} from '@angular/core';
import {AuthService} from "../../auth/services/auth.service";

@Component({
  selector: 'shared-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  private authService = inject( AuthService );

  onLogout(){
    this.authService.logout();
  }
}
