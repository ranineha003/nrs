import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  moods = ['Happy', 'Sad', 'Confused'];

userModel= new User('Neha', 'Neha@123', '');

  ngOnInit() {}
  
  onSubmit(){
    console.log(this.userModel);
  }
}
