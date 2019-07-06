import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { COMMON_URL as URL} from "./commonurl";
import { Observable } from 'rxjs';
 
interface User{
    user:string,
    password:any;
}
@Injectable()
export class LoginSigupService {

    constructor(public http: HttpClient) {}
    
    login(postData:User){
        return this.http.post(URL.login, postData);
    }

    logout() {
        return this.http.get<Observable<User>>(URL.logout);
    }

    register(postData) {
        return this.http.post(URL.register, postData);
    }
}