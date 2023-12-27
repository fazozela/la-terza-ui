import {computed, inject, Injectable, signal} from '@angular/core';
import {environments} from "../../../environments/environments";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AuthStatus, CheckTokenResponse, LoginResponse, TokenResponse} from "../interfaces";
import {catchError, map, Observable, of, tap, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly baseUrl = environments.testBaseUrl;
  private http = inject( HttpClient );

  private _currentUser = signal<Response| TokenResponse | null>(null);
  private _authStatus = signal<AuthStatus>(AuthStatus.checking);


  public currentUser = computed( () => this._currentUser() );
  public authStatus = computed( () => this._authStatus() );

  constructor() {
    this.checkAuthStatus().subscribe();
  }

  login(username: string, password: string): Observable<Boolean>{
    const url = `${ this.baseUrl }/v1/api/login`;
    const body = { username, password };

    return this.http.post<LoginResponse>(url, body)
      .pipe(
        tap( (res) => {
          this._currentUser.set( res.response );
          this._authStatus.set( AuthStatus.authenticated );
          localStorage.setItem( 'token', res.response.token );
        }),

        map( () => true ),

        catchError(err => {
          console.log(err)
          return throwError( () => err.error.message);
        })
      )
  }

  checkAuthStatus(): Observable<Boolean> {
    const url = `${ this.baseUrl }/v1/api/validate`;
    const token = localStorage.getItem('token');
    //console.log(token);

    if(!token){
      this.logout();
      return of(false);
    }

    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const body = { token: token };

    return this.http.post<CheckTokenResponse>(url, body, { headers })
      .pipe(
        map( (res) => {
          this._currentUser.set( res.response );
          this._authStatus.set( AuthStatus.authenticated );
          localStorage.setItem( 'token', res.response.token );

          return true;
        }),

        catchError( () => {
          this._authStatus.set(AuthStatus.notAuthenticated)
          return of(false);
        })
      )
  }

  logout(){
    localStorage.removeItem('token');
    this._currentUser.set(null);
    this._authStatus.set( AuthStatus.notAuthenticated );
  }
}
