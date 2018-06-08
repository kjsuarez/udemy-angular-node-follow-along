import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'auth-signup',
  templateUrl: './signup.component.html'
})

export class SignupComponent implements onInit {
  signupForm:  formGroup;

  onSubmit(){
    console.log(this.signupForm);
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
