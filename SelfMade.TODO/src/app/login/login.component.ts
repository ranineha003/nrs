import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { LoginSigupService } from "../common/services/login-signup";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  moods = ['Happy', 'Sad', 'Confused'];

userModel= new User('Neha', 'Neha@123', '');

constructor(public loginService: LoginSigupService ){}

  ngOnInit() {}
  
  onSubmit(value){
this.loginService.login(value).subscribe((data)=>{
console.log(data);
},
(err)=>{
console.log(err);
}) }

}
