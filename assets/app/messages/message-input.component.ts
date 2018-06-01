import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Message } from './message.model';
import { MessageService } from './message.service';

@Component({
  selector: 'message-input',
  templateUrl: './message-input.component.html'
})

export class MessageInputComponent {
  constructor(private messageService: MessageService) {}

  onSave(value: string){
    const message = new Message(value, 'Kevin');
    this.messageService.addMessage(message);

    //save to db
  }
}
