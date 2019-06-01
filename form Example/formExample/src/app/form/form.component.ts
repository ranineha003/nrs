import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators, Validator, AbstractControl } from "@angular/forms";

@Component({
    selector: 'formExample',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css']
})

export class FormComponent {



    loginForm: FormGroup;
    todo: FormGroup;
    title = "Singh";
    favFood: Array<string> = ["Chocolate", "Milk", "Rajma"]
    fruit = "Mango";
    rank = 5;
    loginSubmit = false;
    constructor() {
        this.loginForm = new FormGroup({
            username: new FormControl('username',[Validators.required, Validators.maxLength(15), this.custom()]),
            password: new FormControl('password', [Validators.required, Validators.minLength(4)])
        })
        this.todo = new FormGroup({
            addition: new FormControl('Title...'),
        })
    }
    custom(){
        return (control: AbstractControl): {[key: string]: any} | null => {
            return true ? {'forbiddenName': {value: control.value, validation:false}} : null;
          };
    }
    get password() { return this.loginForm.get('password'); }
    
    get username() { return this.loginForm.get('username'); }

    submit() {
        if(this.loginForm.valid){

        }else{
            this.loginSubmit = true;
        }
        console.log(this.loginForm)
        console.log(this.loginForm.value)
    }
    submitTodo() {
        console.log(this.todo.value)

    }

}
