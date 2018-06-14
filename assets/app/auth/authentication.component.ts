import { Component } from '@angular/core';
import { User } from "./user.model";
import { AuthService } from "./auth.service";

@Component({
  selector: 'authentication-form',
  templateUrl: './authentication.component.html'
})

export class AuthenticationComponent {

    constructor(private authService: AuthService) {}

  isLoggedIn() {
      return this.authService.isLoggedIn();
  }
}
