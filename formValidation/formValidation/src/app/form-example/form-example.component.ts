import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";


@Component({
  selector: 'form-example',  
  templateUrl: './form-example.component.html',
  styleUrls: ['./form-example.component.css']
})
export class FormExampleComponent implements OnInit {

  search: FormGroup;
  clickMessage: string;

  onclick() {
    console.log(this.search);
    console.log(this.line2)
    this.clickMessage = " i am from onclick";
    //this.search.setValue({ "search1": "", "search2": "", "address": { "line1": "", "line2": "" } })

  }
  resetMe() {
    this.search.reset()
  }
  onClickMe() {
    this.clickMessage = " i am clicked";
    this.search.patchValue({ "address": { "line1": 12122222, "line2": "zip 2" } })
    // this.search.setValue({ "search1": "manoj", "search2": "gupta", "address": { "line1": "anothr line 1", "line2": "line 2" } })

  }
  get search1() {
    return this.search.get('search1')
  }
  get search2() {
    return this.search.get('search2')
  }
    get line1(){
      return this.search.get('address.line1')
  }
  
  get line2(){
    return this.search.get('address.line2')
  }
  constructor() {
    this.search = new FormGroup({
      search1: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]*')]),
      search2: new FormControl('', [Validators.required, Validators.maxLength(9)]),
      address: new FormGroup({
        line1: new FormControl('', Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})")),
        line2: new FormControl(''),
      })
    })
  }

  ngOnInit() {
  }

}
