import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RegisterService {
    constructor(private http: HttpClient) { }
    register(postData) {
        return this.http.post("http://localhost:3000/api/signup", postData);
    }
}