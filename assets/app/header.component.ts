import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <header class="row">
      <nav class="col-md-8 col-med-offset-2">
        <ul class="nav nav-pills">
          <li routerLinkActive="active"><a [routerLink]="['/messages']">Messenger</a></li>
          <li routerLinkActive="active"><a [routerLink]="['/auth']">login/signup</a></li>
        </ul>
      </nav>
    </header>
  `
})

export class HeaderComponent {

}
