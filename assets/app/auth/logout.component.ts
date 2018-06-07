import { Component } from '@angular/core';

@Component({
  selector: 'auth-logout',
  template:`
    <div class="col-md-8 col-md-offset-2">
      <button class="btn btn-danger" (click)="onLogout()">logout</button>
    </div>
  `
})

export class LogoutComponent {
  onLogout(){
    console.log("here I go logging out");
  }
}
