import { Injectable, EventEmitter } from "@angular/core";
import { Subject } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class Communication {
    public sender: Subject<any> = new Subject();
    public $observableSender = this.sender.asObservable();
    //using event emitter
    public senderEvent: EventEmitter<any> = new EventEmitter();
    public $observablesenderEvent = this.senderEvent.asObservable();

    broadcast(data) {
        this.sender.next(data) 
    }
    broadcastEventEmitter(data) {
        this.senderEvent.emit(data)
    }
}