import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Message } from './message.model'

@Component({
  selector: 'message-input',
  templateUrl: './message-input.component.html'
})

export class MessageInputComponent {
  onSave(value: string){
    console.log(value);
    //save to db
  }
}
