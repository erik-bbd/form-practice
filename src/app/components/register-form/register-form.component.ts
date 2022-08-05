import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

  registerForm: FormGroup
  submitted = false

  constructor() {
    this.registerForm = new FormGroup({
      username: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required,  Validators.email]),
      password1: new FormControl('', Validators.required),
      password2: new FormControl('', Validators.required),
    })
   }

  ngOnInit(): void {
  }

  //shortcut for accessing form paramaters

  get f() {return this.registerForm.controls}

  submit() {
    this.submitted = true
  }

}
