import { Component } from '@angular/core';
import { Message } from './messages/message.model'
import { MessageService } from './messages/message.service';

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    providers: [MessageService]
})
export class AppComponent {

}
