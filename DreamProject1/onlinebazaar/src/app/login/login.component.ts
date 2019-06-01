import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl, FormBuilder, EmailValidator } from "@angular/forms";
import { LoginSigupService } from "../common/services/login-signup";
import { Router } from "@angular/router";
import { Communication } from "../common/services/communication.service";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(public loginService: LoginSigupService, public router: Router, public sender: Communication, public fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: this.fb.control('', [Validators.required, Validators.email]),
      password: this.fb.control('', [Validators.required, Validators.minLength(8)]),
    });
  }

  get emailErrors() {
    const email = this.loginForm.get('email');
    if (!email.errors) {
      return '';
    }

    if ((email.touched || email.dirty)) {
      if (email.errors.required) {
        return 'This field is required';
      }
      if (email.errors.email) {
        return 'Enter valid mail ID'
      }
    }
  }

  get passErrors() {
    const pass = this.loginForm.get('password');
    if (!pass.errors) {
      return '';
    }
    if ((pass.touched || pass.dirty)) {
      if (pass.errors.required) {
        return 'This field is required';
      }
      if (pass.errors.minLength) {
        return 'Password should be have minimum 8 Characters';
      }
    }
  }
  submitButton() {
    if (this.loginForm.valid) {
      this.loginService.login(this.loginForm.value)
        .subscribe(
          (data: any) => {
            if (data.login) {
              sessionStorage.setItem('token', data.token);
              sessionStorage.setItem('role', data.user.role);

              this.sender.broadcast(data);
              // this for navigation from component inside the code on click of submitButton
              if(data.user.role=='user'){
                this.router.navigate(['/user/dashboard'])
              }
              if(data.user.role=='admin'){
                this.router.navigate(['/admin/dashboard',{ id: '664545' }])
              } 
              if(data.user.role=='seller'){
                this.router.navigate(['/seller/dashboard'])
            }
            console.log(data);
          }
          (err) => {
            alert(err.error.errMsg)
            console.log(err);
          }})
    } else {

    }
  }

  ngOnInit() {
  }

}
