import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { LoginSigupService } from "../common/services/login-signup";
import { Router } from '@angular/router';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup;
  submitted = false;
  constructor(public signUpService: LoginSigupService, public router: Router, public fb: FormBuilder) {
    this.signUpForm = this.fb.group({
      name: this.fb.control('', [Validators.required]),
      username: this.fb.control('', [Validators.required]),
      email: this.fb.control('', [Validators.required, Validators.email]),
      gender: this.fb.control('', [Validators.required]),
      password: this.fb.control('', [Validators.required, Validators.minLength(8)]),
      cnfpassword: this.fb.control('', [Validators.required]),
    },
      { validators: this.confirmPassword });
  }
  confirmPassword(form: FormGroup) {
    if (form.value.password !== form.value.cnfpassword) {
      return { confirmPassword: 'Please enter both password same' }
    } else {
      return null
    }
  }
  get genderErrors() {
    return this.errorList(this.signUpForm.get('gender'))
  }
  get nameErrors() {
    return this.errorList(this.signUpForm.get('name'))
  }
  get usernameErrors() {
    return this.errorList(this.signUpForm.get('username'))
  }
  get emailErrors() {
    return this.errorList(this.signUpForm.get('email'))
  }
  errorList(control) {

    if (!control.errors) {
      return '';
    }
    // only vaidate if error are there and user has entered wrong value
    if ((control.errors && this.submitted)) {
      if (control.errors.required) {
        return 'This filed is Required'
      }
      if (control.errors.email) {
        return 'Please enter a valid email error'
      }
    }
  }
  get confirmPasswordError() {
    if (this.signUpForm.errors) {
      return this.signUpForm.errors.confirmPassword;
    }
  }
  submitButton() {
    console.log(this.signUpForm.errors)
    this.submitted = true;
    if (this.signUpForm.valid) {
      this.signUpService.register(this.signUpForm.value)
        .subscribe(
          (data) => {
            console.log(data);
            this.router.navigate(['/login'])
          },
          (err) => {
            console.log(err);
          })
    } else {

    }
  }
  ngOnInit() {
  }

}
