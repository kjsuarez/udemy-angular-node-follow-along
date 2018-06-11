import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http'

import { AppComponent } from "./app.component";

import { MessageComponent } from "./messages/message.component";
import { MessageListComponent } from "./messages/message-list.component";
import { MessageInputComponent } from "./messages/message-input.component";
import { MessagesComponent } from "./messages/messages.component";

import { AuthenticationComponent } from "./auth/authentication.component";
import { LogoutComponent } from "./auth/logout.component";
import { LoginComponent } from "./auth/login.component";
import { SignupComponent } from "./auth/signup.component";

import { HeaderComponent } from "./header.component";
import { routing } from "./app.routing";

@NgModule({
    declarations: [
        AppComponent,
        MessageComponent,
        MessageListComponent,
        MessageInputComponent,
        MessagesComponent,
        AuthenticationComponent,
        SignupComponent,
        LoginComponent,
        LogoutComponent,
        HeaderComponent
    ],
    imports: [BrowserModule,
              FormsModule,
              ReactiveFormsModule,
              routing,
              HttpModule],
    bootstrap: [AppComponent]
})
export class AppModule {

}
