import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
items=["Reading", "Eating", "Workout"]

newItem="";

pushItem = function(){
  if(this.newItem !=""){
  this.items.push(this.newItem);
  this.newItem="";
}
}

remove= function(index){
  this.items.splice(index, 1);
}


ngOnInit(){

}
}
