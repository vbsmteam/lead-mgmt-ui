import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {routing} from "./app.routing";
import {AuthenticationService} from "./service/auth.service";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { AddLeadComponent } from './add-lead/add-lead.component';
import { EditLeadComponent } from './edit-lead/edit-lead.component';
import {ListLeadComponent} from "./list-lead/list-lead.component";
import {LeadService} from "./service/lead.service";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListLeadComponent,
    AddLeadComponent,
    EditLeadComponent
  ],
  imports: [
    BrowserModule,
    routing,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthenticationService, LeadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
