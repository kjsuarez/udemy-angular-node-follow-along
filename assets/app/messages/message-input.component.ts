import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";

import { MessageService } from "./message.service";
import { Message } from "./message.model";

@Component({
  selector: 'message-input',
  templateUrl: './message-input.component.html'
})

export class MessageInputComponent {
  constructor(private messageService: MessageService) {}

  onSubmit(form: NgForm){
    console.log("here");
    console.log(form.value.body);
    const message = new Message(form.value.body, 'Kevin');
    this.messageService.addMessage(message)
      .subscribe(
        data => console.log(data),
        error => console.error(error)
      );

    form.resetForm();

    //save to db
  }
}
