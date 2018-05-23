import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html'
})
export class AppComponent {
  message = {
    body: "Boy, Kevin sure is great",
    author: "nobody ever"
  };
}
