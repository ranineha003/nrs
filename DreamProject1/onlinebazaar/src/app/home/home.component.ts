import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'onlinebazaar';
  list:any;

  constructor(){
    this.list = {
      men:["Tee", 'Jeans', 'Shoes','Accessories'],
      women:["Clothes",'Party Dress', 'Bottom Wear', 'Footwear'],
      sales:['bumper sale', 'Upto sale'],
      prices:['299', '599', '999']
    }; 
  }
}




