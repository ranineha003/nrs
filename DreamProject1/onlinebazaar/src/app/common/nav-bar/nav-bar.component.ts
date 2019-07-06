import { Component, OnInit } from '@angular/core';
import { Communication } from "../services/communication.service";
import { Router } from "@angular/router";
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  public isLoggedIn = false;
  public isUser = false;
  public isAdmin = false;
  public isSeller = false;

  constructor(public listener: Communication, public route: Router) {
    if (sessionStorage.getItem('token')) {
      this.isLoggedIn = true;
    }
    if (sessionStorage.getItem('role') == 'user') {
      this.isUser = true;
    }
    if (sessionStorage.getItem('role') == 'admin') {
      this.isAdmin = true;
    }
    if (sessionStorage.getItem('role') == 'seller') {
      this.isSeller = true;
    }
    this.listener.$observableSender.subscribe((data) => {
      console.log(data);
      this.isLoggedIn = true;

      if (data.user.role == 'user') {
        this.isUser = true;
      }
      if (data.user.role == 'admin') {
        this.isAdmin = true;
      }
      if (data.user.role == 'seller') {
        this.isSeller = true;
      }
    })
  }

  ngOnInit() {

  }
  logout() {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('role');
    this.isLoggedIn = false;
    this.isUser = false;
    this.isAdmin = false;
    this.isSeller = false;
    this.route.navigate(['/login']);
  }
}
