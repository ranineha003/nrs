import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Injectable } from "@angular/core";

@Injectable()
export class AdminGuard implements CanActivate {
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (sessionStorage.getItem('role') === 'admin') {
            return true;
        } else {
            alert('You are not Authorized')
            return false;
        }
    }
}