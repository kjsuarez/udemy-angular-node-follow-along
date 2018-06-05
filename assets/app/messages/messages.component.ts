import { Component } from '@angular/core';
import { NgForm } from '@angular/forms'

import { Message } from './message.model';
import { MessageService } from './message.service';

@Component({
  selector: 'messages',
  template: `
    <div class="row">
      <message-input></message-input>
    </div>
    <hr>
    <div class="row">
      <message-list></message-list>
    </div>
  `,
  providers: [MessageService]

})

export class MessagesComponent {

}
