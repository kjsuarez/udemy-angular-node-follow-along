import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Message } from './message.model'

@Component({
  selector: 'message-list',
  templateUrl: './message-list.component.html',
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

export class MessageListComponent {
  messages: Message[] = [
    new Message("Kevin is great", "nobody ever"),
    new Message("kevin lacks integrity", "probably a few people at some point")
  ];
}
