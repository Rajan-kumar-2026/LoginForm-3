import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../shared/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  email!: string;
  password!: string;
  confirmPassword!: string;

  constructor(private reg: RegisterService) { }

  register() {
    this.reg.registerUser(this.email, this.password, this.confirmPassword).subscribe(
       r => {
      this.email = '';
      this.password = '';
      this.confirmPassword = '';
      alert('Registration Successful');
    },
    e => alert(e.message));
  }
}
