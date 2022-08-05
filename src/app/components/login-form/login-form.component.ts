import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Login } from 'src/app/interfaces/login';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  loginForm: FormGroup<any>
  returnUrl: string
  submitted = false
  

  constructor(private authService: AuthService) {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })
    this.returnUrl = '/dashboard';  
    authService.logout(); 
   }

  ngOnInit(): void {
    
    
     
  }

  get f() {
    return this.loginForm.controls
  }

  async submit() {
    this.submitted = true
    try {
      await this.authService.login(<Login>this.loginForm.value)
    } catch (e) {
      console.log("Login error: " + e)
    }
  }

}
