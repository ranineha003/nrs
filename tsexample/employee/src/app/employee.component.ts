import { Component, Input, OnInit, EventEmitter, AfterViewInit, OnDestroy, AfterContentInit, DoCheck, OnChanges, SimpleChange, SimpleChanges, AfterContentChecked, Output } from "@angular/core";
import { FormGroup, FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
@Component({
    selector: "employee",
    template: `<h1> is employee company {{xyz}}</h1>
    <form [formGroup]="form"><input tyep="text" formControlName="name"></form>
    `
})
export class Employee implements OnInit, AfterViewInit, OnDestroy, DoCheck, AfterContentInit,AfterContentChecked ,OnChanges {
    @Input() xyz;
    @Output('dddd') abc = new Subject();
    @Output('event') event : EventEmitter<any> = new EventEmitter();
    form:FormGroup;
    constructor() {
        this.form = new FormGroup({
            name:new FormControl('fff')
        });
        console.log('constructor is called')
    }
    ngOnInit() {
        console.log('ngOnInit is called')
    }
    ngAfterViewInit() {
        console.log('ngAfterViewInit is called');
        
    }
    ngOnDestroy() {
        console.log('ngOnDestroy is called')
    }
    ngAfterContentInit() {
        console.log('ngAfterContentInit is called')
    }
    ngDoCheck() {
        console.log('ngDoCheck is called');
        this.abc.next({a:10});
        this.event.emit('hhh')
    }
    ngOnChanges(changes:SimpleChanges){
        console.log(changes)
        console.log('ngOnChanges is called')
    }
    ngAfterContentChecked(){
        console.log('ngOnChanges is called')
    }
}