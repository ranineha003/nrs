import { Component, Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { AppServiceExample } from "./app.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  /*providers: [serviceExample // this is child providers]*/
})
export class AppComponent {
  title = 'http';
  postList: Array<{}>;
  constructor(public http: HttpClient, public myHttp: AppServiceExample) {
    this.myHttp.getPosts((yyyy: any) => {
      this.postList = yyyy;
      this.getW()
    },
      (error) => {
        console.log(error)
      })
  }
  getW() {

    this.myHttp.setPosts()
      .subscribe((yyyy: any) => {
        setTimeout(() => {
          this.postList = [yyyy];
          this.getr();
        }, 3000)

      })
  }
  getr() {
    this.myHttp.setPut(
      (data) => {
        console.log(data);
        this.postList = [data];
        setTimeout(() => {
          this.del();
        }, 2000)
      },
      (error) => {
        console.log(error)
      });


  }

  del() {
    this.myHttp.del()
      .subscribe((xxxx: any) => {
        this.postList = [xxxx];
      })
  }
}
