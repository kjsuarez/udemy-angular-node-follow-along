import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'

import { User } from "./user.model";
import { AuthService } from "./auth.service";

@Component({
  selector: 'auth-signup',
  templateUrl: './signup.component.html'
})

export class SignupComponent implements onInit {
  signupForm:  formGroup;

  constructor(private authService: AuthService) {}

  onSubmit(){
    const user = new User(
      this.signupForm.value.firstName,
      this.signupForm.value.lastName,
      this.signupForm.value.email,
      this.signupForm.value.password
    );

    this.authService.signup(user)
      .subscribe(
        data => console.log(data),
        error => console.error(error)
      );
    this.signupForm.reset();
  }

  ngOnInit(){
    this.signupForm = new FormGroup({
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      email: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9.!#$%&’*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
      ]),
      password: new FormControl(null, Validators.required)

    });
  }
}
