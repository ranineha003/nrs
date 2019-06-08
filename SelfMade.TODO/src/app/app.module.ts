import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { ListComponent } from "./employee/list/list.component";
import { DetailsComponent } from "./employee/details/details.component";

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { Communication } from './common/services/communication.service';
import { LoginSigupService } from "./common/services/login-signup";


@NgModule({
  declarations: [AppComponent,ListComponent,DetailsComponent, LoginComponent, SignupComponent],
  imports: [BrowserModule,FormsModule,ReactiveFormsModule,HttpClientModule],
  providers: [Communication, LoginSigupService],
  bootstrap: [AppComponent]
})
export class AppModule { }
