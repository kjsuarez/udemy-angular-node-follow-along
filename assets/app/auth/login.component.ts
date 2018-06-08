import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'auth-login',
  templateUrl:'./login.component.html'
})

export class LoginComponent implements onInit {

  loginForm:  formGroup;

  onSubmit(){
    console.log(this.loginForm);
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
