import {Component, inject} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {AuthService} from "../../../services/auth.service";
import {Router, RouterModule} from "@angular/router";
import Swal from 'sweetalert2'

@Component({
  selector: 'app-auth-login-page',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterModule
  ],
  templateUrl: './auth-login-page.component.html',
  styleUrl: './auth-login-page.component.css'
})
export default class AuthLoginPageComponent {
  private fb = inject(FormBuilder);
  private authenticationService = inject(AuthService);
  private router = inject( Router );

  public myForm: FormGroup = this.fb.group({
    username: ['userprueba', [Validators.required]],
    password:  ['prueba123', [Validators.required]],
  })

  login(){
    const {username, password} = this.myForm.value;

    this.authenticationService.login(username, password)
      .subscribe({
        next: () => this.router.navigateByUrl('/dashboard'),
        error: (errorMessage) => {
          Swal.fire('Error', errorMessage, 'error')
        }
      })
  }
}
