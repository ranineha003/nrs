import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ContactDirComponent } from './contact-dir/contact-dir.component';
import { ContactEditComponent } from './contact-dir/contactEdit/contact-Edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactDirComponent,
    ContactEditComponent  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
