import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Message } from './message.model';
import { MessageService } from './message.service';

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

export class MessageListComponent implements onInit {
  messages: Message[] = [];

  constructor(private messageService: MessageService) {}

  ngOnInit(){
    this.messages = this.messageService.getMessages();
  }
}
