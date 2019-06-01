import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RoutingExample } from "./routingExample";
import { RoutingPage2 } from "./page2/routingPage2.component";
import { RouterModule, Routes } from "@angular/router";

const croutes: Routes = [
  { path: 'examp1', component: RoutingExample },
  { path: 'examp2', component: RoutingPage2 },
]

@NgModule({
  declarations: [
    AppComponent,
    RoutingExample,
    RoutingPage2,

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(croutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
