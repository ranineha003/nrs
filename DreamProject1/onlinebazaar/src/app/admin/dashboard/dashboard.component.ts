import { Component, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProdInventoryAllComponent } from "../products_inventory_all/products_inventory_all.component";
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardAdminComponent {
  title = 'onlinebazaar';
  user: any;
  items = ["manoj", "sameer", "gopal", "shaki", 3]
  //@ViewChild(ProdInventoryAllComponent) localprod: ProdInventoryAllComponent;
  @ViewChild("localprod2") localprod2: ProdInventoryAllComponent;
  @ViewChild("h1ref") h1ref: ElementRef;

  constructor(route: ActivatedRoute) {
    console.log(route)
    route.params.subscribe(p => {
      console.log(p);
    });
    route.url.subscribe((segments => segments.join('')));
    // route.data includes both `data` and `resolve`
    const user = route.data.subscribe(dt => {
      console.log(dt);
      this.user = dt.icon;
    });
  }
  btnClick() {
    console.log(this.h1ref.nativeElement)
    this.h1ref.nativeElement.style = "background-color:pink";
    this.h1ref.nativeElement.innerHTML = "dadasd";
    //this.h1ref.nativeElement.remove();
    this.localprod2.alrtme()
  }
  event1Prent(data: any) {
    console.log(data)
  }
  trackByFn(index, data) {
    console.log(index, data)
  }
}