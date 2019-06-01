import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subscriber } from 'rxjs';

@Injectable()
export class AppServiceExample {
    public CURL = "https://jsonplaceholder.typicode.com/";
    constructor(public http: HttpClient) {

    }
    getPosts(cb, err?: any) {
        return this.http.get(this.CURL + "posts")
            .subscribe(
                (data: any) => {
                    if (typeof (cb) == "function") {
                        cb(data)
                    } else {
                        alert("fir bhool gaya");
                    }
                },
                (error) => {
                    if (typeof (err) == "function")
                        err(error)
                })
    }
    setPosts() {
        return this.http.post(this.CURL + "posts", { id: 1, title: "mnano", body: "This is weird" })
    }

    setPut(cb: any, err: any) {
        return this.http.put(this.CURL + "posts/3", { id: 2, title: "NRS", body: "This is added by me ggggg" })
            .subscribe((data: any) => {
                if (typeof (cb) == "function") {
                    cb(data)
                } else {
                    alert("Put error");
                }
            },
                (error) => {
                    if (typeof (err) == "function")
                        err(error)
                })

        

    }

    del() {
    return this.http.delete(this.CURL + "posts/1")
     }
}