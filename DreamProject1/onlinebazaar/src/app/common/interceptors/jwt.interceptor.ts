import { Injectable } from "@angular/core";
import { HttpClient, HttpEvent, HttpRequest, HttpHandler, HttpInterceptor } from "@angular/common/http";
import { Observable } from "rxjs";
@Injectable({ providedIn: 'root' })
export class JWTInterceptors implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let jwtToken = sessionStorage.getItem('token');
        if (jwtToken) {
            req = req.clone({
                setHeaders: {
                    'x-access-token': jwtToken
                }
            })
        }
        return next.handle(req);
    }
}
