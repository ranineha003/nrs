import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { RegisterService } from '../services'
@Component({
    selector: 'app-register',
    templateUrl: './register.component.html'
})

export class RegisterComponent {
    registerInfo: FormGroup;

    constructor(public registerSer: RegisterService) {
        this.registerInfo = new FormGroup({
            username: new FormControl(),
            email: new FormControl(),
            password: new FormControl()
        })
    }
    register() {
        this.registerSer.register(this.registerInfo.value).subscribe((data) => {
            alert("This is done");
        },(err)=>{
             alert('something went wrong');
        });
    }
}