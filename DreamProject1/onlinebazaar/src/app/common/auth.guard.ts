import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthGuard implements CanActivate {
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        console.log(route);
        console.log(state)
        if (sessionStorage.getItem('token')) {
            return true;
        } else {
            return false;
        }
    }
}