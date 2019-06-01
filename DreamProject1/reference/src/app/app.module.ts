import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http"
import { JWTInterceptor } from "./services/http.inteceptor";
import { ErrorInterceptor } from "./services/error.interceptor";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { HeaderComponent } from "./header";
import { FooterComponent } from "./footer/footer.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { HomeComponent } from "./home/home.component";
import { PostsComponent } from "./posts/posts.component";

import { RegisterService, LoginService, CommonURL, BroadcastSubject, PostService } from "./services";
import { AuthGuard } from "./services/auth.guard";
import { PostDataComponent } from './postdata/postdata.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    PostsComponent,
    PostDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    RegisterService,
    AuthGuard,
    LoginService,
    CommonURL,
    BroadcastSubject,
    PostService,
    {
      provide: HTTP_INTERCEPTORS, useClass: JWTInterceptor, multi: true
    },
    {
      provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true
    }
  ],
  bootstrap: [AppComponent, HeaderComponent, FooterComponent, NavbarComponent]
})
export class AppModule { }
  