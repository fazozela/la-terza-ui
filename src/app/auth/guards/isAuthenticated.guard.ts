import { inject } from '@angular/core';
import { Router, type CanActivateFn } from '@angular/router';
import { AuthStatus } from '../interfaces';
import {AuthService} from "../services/auth.service";

export const isAuthenticatedGuard: CanActivateFn = (route, state) => {

  const currentUrl = state.url;

  const authenticationService = inject( AuthService );
  const router = inject( Router );

  if( authenticationService.authStatus() === AuthStatus.authenticated ) {
    localStorage.setItem('currentUrl', currentUrl);
    return true;
  }

  if( authenticationService.authStatus() === AuthStatus.checking ) {
    return false;
  }

  router.navigateByUrl('/auth/login');
  return false;
};
