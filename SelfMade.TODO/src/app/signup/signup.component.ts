import { Component, OnInit,  } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { LoginSigupService } from "../common/services/login-signup";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
signForm: FormGroup;
  constructor(public fb: FormBuilder, public registerService4rf: LoginSigupService ) { 
    this.signForm= this.fb.group({
      username: this.fb.control(''),
      email: this.fb.control(''),
      pw: this.fb.control(''),
      cnfpwd: this.fb.control(''),
      gender:this.fb.control(''),
      
    })
  }

  ngOnInit() {
  }

}
