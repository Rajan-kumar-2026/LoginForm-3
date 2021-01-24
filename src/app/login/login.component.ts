import { Component, OnInit } from '@angular/core';
import { CommonService } from '../shared/common.service';
import { RegisterService } from '../shared/register.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  userName!: string;
  password!: string;

  constructor(private log: RegisterService, private cs: CommonService) { }

  login() {
    this.log.login(this.userName, this.password).subscribe(t => {
      localStorage.setItem('token', t.access_token);
      this.cs.isLoggedIn$.next(true);
    })
  }
}
