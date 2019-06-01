import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-admin-prodinventory-all',
  templateUrl: './products_inventory_all.component.html',
  styleUrls: ['./products_inventory_all.component.css']
})
export class ProdInventoryAllComponent {
  @Input() title = 'onlinebazaar';
  @Output() event1: EventEmitter<any> = new EventEmitter();

  alrtme() {
    alert('This is from Product inverntor');
    this.event1.next({ a: 10 })
  }

}
