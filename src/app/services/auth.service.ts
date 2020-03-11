import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loginUrl = 'http://ppsnext.us-east-1.elasticbeanstalk.com/api/authenticate';

  constructor(private http: HttpClient) { }


  loginUser(user) {
    return this.http.post<any>(this.loginUrl, user);
  }

  isLogged() {
    return !!localStorage.getItem('token');
  }

  getToken() {
    return localStorage.getItem('token');
  }

  logout(){
    localStorage.removeItem('token');
  }
}
