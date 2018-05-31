import { Component } from '@angular/core';
import { Message } from './messages/message.model'
@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styles: [`
        .author{
          display: inline-block;
          font-style: italic;
          font-size: 12px;
          width: 80%;
        }
        .config{
          display: inline-block;
          text-align: right;
          font-size: 12px;
          width: 19%;
        }
    `]
})
export class AppComponent {
  messages: Message[] = [
    new Message("Kevin is great", "nobody ever"),
    new Message("kevin lacks integrity", "probably a few people at some point")
  ];
}
