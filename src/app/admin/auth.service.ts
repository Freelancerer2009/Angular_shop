import { Injectable } from '@angular/core';
import { LoginComponent } from './login/login.component';

const LOGIN = '1';
const PASS = '1';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  isAuth: boolean = false;

  constructor() { }
  login(login: string, password: string): boolean {
    if(login === LOGIN && password === PASS) {
      this.isAuth = true;
    }
    return this.isAuth;
  }

  logout() {
    this.isAuth = false;
  }
}

