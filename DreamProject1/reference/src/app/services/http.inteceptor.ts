import { Injectable } from "@angular/core";
import { HttpClient , HttpEvent, HttpRequest , HttpHandler , HttpInterceptor } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class JWTInterceptor implements HttpInterceptor{
    intercept(request : HttpRequest<any>, next : HttpHandler) : Observable<HttpEvent <any>> {
        let jwtToken = localStorage.getItem('token');
        if(jwtToken){
            request = request.clone({
                setHeaders : {
                    'x-access-token' : jwtToken
                }
            })
        }
        return next.handle(request);
    }
}