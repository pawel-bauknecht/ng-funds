import { Component, OnInit } from '@angular/core';
import { AuthService } from '../user/login/auth.service';
import { IUser } from '../user/user.model';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  constructor(
    public auth: AuthService
  ) {}
}
