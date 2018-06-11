import { Http, Response, Headers } from "@angular/http";
import { Injectable, EventEmitter } from "@angular/core";
import 'rxjs/Rx';
import { Observable } from "rxjs";

import { Message } from "./message.model";

@Injectable()
export class MessageService {

  private messages: Message[] = [];

  constructor(private http: Http) {}

  addMessage(message: Message){
    this.messages.push(message);
    console.log(this.messages);

    const body = JSON.stringify(message);
    console.log(body);
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post('http://localhost:3000/message', body, {headers: headers})
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw(error.json()));
    console.log("fucking CUNTS");
  }

  getMessages(){
    return this.messages;
  }

  deleteMessage(message: Message){
    this.messages.splice(this.messages.indexOf(message), 1);
  }
}
