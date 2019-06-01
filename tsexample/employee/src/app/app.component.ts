import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'from app component';
  i=0;
  constructor(){

    setInterval(()=>{this.title="something from app compoenet"+(this.i++)},3000)
  }
  myMethod(data){
    console.log(data)
  }
}
