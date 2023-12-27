import {Component, computed, effect, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Router, RouterModule} from '@angular/router';
import {AuthService} from "./auth/services/auth.service";
import {AuthStatus} from "./auth/interfaces";
import {HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  private authService = inject(AuthService);
  private router = inject(Router);

  private currentUrl = localStorage.getItem('currentUrl');
  public isAuthCheckedFinished = computed<Boolean>( () => {
    if( this.authService.authStatus() === AuthStatus.checking ) {
      return false;
    }
    return true;
  });

  public authStatusChangedEffect = effect( () => {

    switch( this.authService.authStatus() ){
      case AuthStatus.checking:
        return;

      case AuthStatus.authenticated:
        this.router.navigateByUrl(this.currentUrl!);
        return;

      case AuthStatus.notAuthenticated:
        this.router.navigateByUrl('/auth/login');
        return;
    }

  });
}
