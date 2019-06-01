import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { Employee } from "./employee.component";
import {  headerComponent} from "./header.component";
@NgModule({
  declarations: [
    AppComponent,
    Employee,
    headerComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
