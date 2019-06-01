import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { FormExampleComponent } from './form-example/form-example.component';
import { FormBuilderComponent } from './form-builder/formbuilder.component';

@NgModule({
  declarations: [
    AppComponent,
    FormExampleComponent,
    FormBuilderComponent,

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
