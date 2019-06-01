import {Component, OnInit} from "@angular/core";
import { FormArray, FormBuilder, FormGroup, Validators, ValidatorFn } from "@angular/forms";

@Component({
    selector: 'form-builder',
    templateUrl: './formbuilder.component.html',
    styleUrls: ['./formbuilder.component.css']
})
    export class FormBuilderComponent{
     
        form:any;
        constructor(private fb: FormBuilder ){
            this.form=this.fb.group({
                username:this.fb.control('',[Validators.required, Validators.pattern('[a-zA-Z0-9]*')]),
                password:this.fb.control('',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]),
                cnfpassword:this.fb.control('',Validators.required),
            });
        }

    }