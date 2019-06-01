import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {  } from "@angular/common";

@Component({
  selector: 'app-table-custom',
  templateUrl: './table-custom.component.html',
  styleUrls: ['./table-custom.component.css']
})
export class TablecustomComponent implements OnInit {
 @Input() itemHeader:Array<string>;
 @Input() itemList:Array<{}>;
 @Output() myitemclick=new EventEmitter()
  constructor() { }

  ngOnInit() {
  }
  btn(data){
    this.myitemclick.next(data)
  }
}
