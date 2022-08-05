import { Injectable } from '@angular/core';
import { Login } from '../interfaces/login';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  logout() {
    localStorage.setItem('isLoggedIn', 'false');
    localStorage.removeItem('token')
  }

  async login(credentials: Login) {
    console.log(await this.http.post('/login', credentials))
  }
}
