import { Injectable } from "@angular/core";
import { HttpEvent, HttpRequest, HttpHandler, HttpInterceptor } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
@Injectable({ providedIn: 'root' })
export class ErrorInterceptors implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            if (err.status === 401) {
                alert("Unauthorilation");
            }
            if (err.status === 409) {
                alert("Invalid Username / Password");
            }
            const error = err.error.mesaage || err.statusText;
            return throwError(error);
        }))
    }

}