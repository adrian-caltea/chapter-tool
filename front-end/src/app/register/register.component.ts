import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  Roles: any = ['Admin', 'User'];
  form: any = {
    username: null,
    email: null,
    password: null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {

  }

  onSubmit(): void {
    const { username, email, password } = this.form;
    this.authService.register(username, email, password).subscribe(
      (data: any) => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      (err: { error: { message: string; }; }) => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }
}
