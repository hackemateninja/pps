import { Component } from '@angular/core';
import {AuthService} from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pps';

  constructor(private authService: AuthService) {
    this.isLoggd();
  }
  isLoggd() {
    return this.authService.isLogged();
  }
}
