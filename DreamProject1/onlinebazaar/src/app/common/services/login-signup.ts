import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { CommonURL } from "./commonurl";
import { Observable } from 'rxjs';

interface User{
    user:string,
    password:string;
}
@Injectable()
export class LoginSigupService {
    public commonURL: CommonURL = new CommonURL();

    constructor(public http: HttpClient) {}
    
    login(postData:User) {
        return this.http.post(this.commonURL.login, postData);
    }

    logout() {
        return this.http.get<Observable<User>>(this.commonURL.logout);
    }

    register(postData) {
        return this.http.post(this.commonURL.register, postData);
    }
}