import { Component } from "@angular/core";
import { PostService } from "../services/posts.service";
@Component({
    selector: 'app-home',
    templateUrl: './home.component.html'
})

export class HomeComponent {
    posts: any;
    constructor(private postdataservice: PostService) {
        this.postdataservice.listPost().subscribe((val) => {
            this.posts = val;
        });
    }
}