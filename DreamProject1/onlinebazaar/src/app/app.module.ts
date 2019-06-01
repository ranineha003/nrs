import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CommonModule  } from "@angular/common";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './main/main.component';
import { LoginSigupService } from "./common/services/login-signup";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { JWTInterceptors } from "./common/interceptors/jwt.interceptor";
import { ErrorInterceptors } from "./common/interceptors/error.interceptors";
import { NavBarComponent } from './common/nav-bar/nav-bar.component';
import { Communication } from './common/services/communication.service';
import { UserGuard} from "./common/user.guard";
import { AdminGuard} from "./common/admin.guard";
import { SellerGuard} from "./common/seller.guard";


@NgModule({
  declarations: [
    MainComponent,
    NavBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [
    LoginSigupService,
    UserGuard,
    AdminGuard,
    SellerGuard,
    Communication,
    { provide: HTTP_INTERCEPTORS, useClass: JWTInterceptors, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptors, multi: true }

  ],
  bootstrap: [MainComponent]
})
export class AppModule { }
