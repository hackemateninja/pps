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
    this.logout();
  }

  logout(){
    if (this.authService.isLogged()){
      this.router.navigateByUrl('/dashboard');
    }else {
      this.authService.logout();
    }
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
    this.router.navigateByUrl('/dashboard');
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
