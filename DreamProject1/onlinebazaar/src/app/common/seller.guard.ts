import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Injectable } from "@angular/core";

@Injectable()
export class SellerGuard implements CanActivate {
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (sessionStorage.getItem('role') === 'seller') {
            return true;
        } else {
            alert('You are not Authorized')
            return false;
        }
    }
}