import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  loginForm: FormGroup<any>
  submitted = false

  constructor(private authService: AuthService, private router: Router) {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })
   }

  ngOnInit(): void {
  }

  get f() {
    return this.loginForm.controls
  }

  async submit() {
    this.submitted = true
    await this.authService.Authenticate(this.loginForm.value)
    console.log(this.authService.isAuthenticated())
    this.router.navigate(['/'])
  }

}
