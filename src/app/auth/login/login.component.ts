import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  typeAlert: string;
  textAlert: string;
  showAlert = false;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onLogin(form): void{
    console.log(form.controls);
    this.typeAlert = 'success';
    this.textAlert = 'Login Success';
    this.showAlert = true;
    setTimeout(() => {
      this.router.navigateByUrl('/dashboard');
    }, 1000);
  }

}
