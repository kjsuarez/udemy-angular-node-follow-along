import { Component } from '@angular/core';
import { User } from "./user.model";
import { AuthService } from "./auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'auth-logout',
  template:`
    <div class="col-md-8 col-md-offset-2">
      <button class="btn btn-danger" (click)="onLogout()">logout</button>
    </div>
  `
})

export class LogoutComponent {

  constructor(private authService: AuthService, private router: Router){}

  onLogout(){
    console.log("here I go logging out");
    this.authService.logout();
    this.router.navigate(['/auth', 'login']);
  }
}
