import { Injectable } from "@angular/core";
import { HttpEvent, HttpRequest , HttpHandler , HttpInterceptor } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { LoginService } from "./login.service";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor{

    constructor(private loginService : LoginService) { }
    
    intercept(request : HttpRequest<any>, next : HttpHandler) : Observable<HttpEvent <any>> {
        return next.handle(request).pipe(catchError(err => {
            if(err.status === 401){
                this.loginService.logout();
                location.reload(true);
            }
            if(err.status === 409){
                alert("Invalid Username / Password");
            }
            const error = err.error.mesaage || err.statusText;
            return throwError(error);
        }))
    }
}