import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Router } from "@angular/router";

import { User } from "./user.model";
import { AuthService } from "./auth.service";

@Component({
  selector: 'auth-login',
  templateUrl:'./login.component.html'
})

export class LoginComponent implements onInit {

  loginForm:  formGroup;

  constructor(private authService: AuthService, private router: Router) {}
  // why is a constructor needed when using a service?

  onSubmit(){
    console.log(this.loginForm.value.email);
    console.log(this.loginForm.value.password);
    const user = new User(
      "",
      "",
      this.loginForm.value.email,
      this.loginForm.value.password
    );
    this.authService.login(user)
      .subscribe(
        data => {
            localStorage.setItem('token', data.token);
            localStorage.setItem('userId', data.userId);
            this.router.navigateByUrl('/');
        },
        error => console.error(error)
      );
    this.loginForm.reset();
  }

  ngOnInit(){
    this.loginForm = new FormGroup({
      email: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9.!#$%&’*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
      ]),
      password: new FormControl(null, Validators.required)

    });
  }
}
