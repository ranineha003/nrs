import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-dir',
  templateUrl: './contact-dir.component.html',
  styleUrls: ['./contact-dir.component.css']
})
export class ContactDirComponent implements OnInit {

  contactList = [
    { name: "Neha", phone: 122345 },
    { name: "Dinesh", phone: 235488 },
    { name: "Gopal", phone: 345678 },

  ];
  constructor() { }

  ngOnInit() {}

  delete(index) {
    this.contactList.splice(index, 1)
  }

  add(index){

  }
}
