import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonURL } from "./commonurl";

@Injectable()
export class LoginService {
    constructor(private http: HttpClient, private commonURL : CommonURL) { }
    login(postData){
        return this.http.post(this.commonURL.login, postData);
    }

    logout(){
        localStorage.removeItem("token");
        return this.http.get(this.commonURL.logout);
    }
}