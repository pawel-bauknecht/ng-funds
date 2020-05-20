import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  userName: string
  password: string
  mouseoverLogin: boolean
  loginInvalid = false

  constructor(private authService: AuthService, private router:Router) { }

  login(formValues: { userName: string; password: string; }): void {
    this.authService.loginUser(formValues.userName, formValues.password)
      .subscribe(res => {
        if(!res) {
          this.loginInvalid = true
        } else {

          this.router.navigate(['events'])
        }
      })
  }

  cancel(): void {
    this.router.navigate(['events'])
  }
}
