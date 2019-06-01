import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'formValidation';

  form: any;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      username: this.fb.control('', [Validators.required, Validators.maxLength(11)]),
      password: this.fb.control('', [Validators.required,]),
      cnfpassword: this.fb.control('', [Validators.required]),
      address: this.fb.group({
        state: this.fb.control('', [Validators.pattern('[a-zA-Z]*')]),
        zipcode: this.fb.control('', [Validators.maxLength(6), Validators.pattern('[0-9]*')]),
        country: this.fb.control('', [Validators.pattern('[a-zA-Z]*')]),
      }),

      aliases: this.fb.array([
        this.fb.control('dynamic addition')
      ])
    });
  }
  delete(i){
    this.aliases.removeAt(i-1)
  }
  get aliases() {
    return this.form.get('aliases') as FormArray;
  }
  addMore() {
    this.aliases.push(this.fb.control('dffdfdf'))
  }
  onSubmit() {
    console.log(this.form)
  }
  
}
