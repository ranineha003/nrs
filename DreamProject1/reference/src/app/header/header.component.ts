import { Component } from "@angular/core";
import { BroadcastSubject ,LoginService} from "../services";
import { Router} from "@angular/router"
@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})

export class HeaderComponent {
    title: string = "My Project";
    hideNav = false;
    constructor(public broadcastSubject: BroadcastSubject, public loginServ:LoginService, public router:Router) {
        if(localStorage.getItem('token')){
            this.hideNav = true;
        }
        this.broadcastSubject.$bdcastObservable.subscribe((data) => {
            if (data.login) {
                this.hideNav = true;
            }
        })
    }
    logout(){
        this.loginServ.logout().subscribe(()=>{
            this.hideNav = false;
            this.router.navigate(["/login"]);
        });
    }
}