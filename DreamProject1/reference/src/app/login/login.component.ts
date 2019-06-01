import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { LoginService } from "../services";
import { Router } from "@angular/router";
import { BroadcastSubject } from "../services";


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html'
})

export class LoginComponent {
    loginInfo: FormGroup;

    constructor(private loginService: LoginService, private router: Router, public broadcastSubject: BroadcastSubject) {
        this.loginInfo = new FormGroup({
            email: new FormControl('', [Validators.required, Validators.minLength(5), Validators.email, this.customValidator()]),
            password: new FormControl()
        })
    }

    customValidator() {
        return (control: AbstractControl): { [key: string]: any } | null => {
            if (control.value.indexOf('gmail') !== -1) {
                return true ? { 'notvalidmail': true } : null;
            }
            else
                return null;
        };
    }

    get email() { return this.loginInfo.get('email') }
    get password() { return this.loginInfo.get('password') }

    login() {
        if (this.loginInfo.valid) {
            this.loginService.login(this.loginInfo.value).subscribe((data: any) => {
                if (data.login) {
                    localStorage.setItem("token", data.token);
                    this.broadcastSubject.sendMessage(data);
                    this.router.navigate(["/home"]);
                }
            });
        }
    }
}