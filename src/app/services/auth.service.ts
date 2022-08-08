import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/login';
import { Observable } from 'rxjs';
import { UserResult } from '../user-result';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user?: User

  constructor(private http: HttpClient) { }

  Authenticate(user: User): Promise<any> {
    this.user = user
    //console.log(this.user)
    return new Promise(resolve => this.http.post('http://localhost:8080/login', {username: user.username, password: user.password}).subscribe(
      (res) => {
        console.log(res)
        
        resolve("done")
      }
    )) 
  }

  isAuthenticated() {
    return this.user?.loggedIn || false
  }
}
