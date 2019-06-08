import { Injectable, EventEmitter } from "@angular/core";
import { Subject } from "rxjs";
@Injectable({
    providedIn:'root'
})

export class Communication {
    public sender: Subject<any> = new Subject();
    public $observableSender = this.sender.asObservable();
    
    broadcast(data){
        this.sender.next(data)
    }
}