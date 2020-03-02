import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormControl} from '@angular/forms';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginUser = {
    password: '',
    rememberMe: true,
    username: '',
  };

  typeAlert: string;
  textAlert: string;
  showAlert = false;
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

  onLogin(): void {
    this.authService.loginUser(this.loginUser)
      .subscribe(
        res => {
          this.successLogin(res);
        }, error => {
          this.errorLogin();
        }
      );
  }
  successLogin(res) {
    localStorage.setItem('token', res.id_token);
    this.typeAlert = 'success';
    this.textAlert = 'Login Success';
    this.showAlert = true;
    setTimeout(() => {
      this.router.navigateByUrl('/dashboard');
    }, 1000);
  }
  errorLogin() {
    this.typeAlert = 'danger';
    this.textAlert = 'User not found';
    this.showAlert = true;
    setTimeout(() => {
      this.showAlert = false;
    }, 5000);
  }

}
