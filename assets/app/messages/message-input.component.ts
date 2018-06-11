import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";

import { MessageService } from "./message.service";
import { Message } from "./message.model";

@Component({
  selector: 'message-input',
  templateUrl: './message-input.component.html'
})

export class MessageInputComponent implements OnInit{

  message: Message;

  constructor(private messageService: MessageService) {}

  onSubmit(form: NgForm){
    if(this.message) {
      // the message already exists, so we're editing
      this.message.body = form.value.body; // changes message in the frontend
      this.message = null;
    } else {
      // the message does not yet exits, we're creating a new one
      const message = new Message(form.value.body, 'Kevin');
      this.messageService.addMessage(message)
        .subscribe(
          data => console.log(data),
          error => console.error(error)
        );
    }


    form.resetForm();
  }

  onClear(form: NgForm){
    this.message = null;
    form.resetForm();
  }

  ngOnInit() {
    this.messageService.messageIsEdit.subscribe(
      (message: Message) => this.message = message
    );
  }
}
