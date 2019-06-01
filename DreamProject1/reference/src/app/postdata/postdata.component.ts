import { Component, Input, Output, OnInit } from "@angular/core";
import { PostService } from "../services";
import { Subject } from "rxjs";


@Component({
    selector: 'app-postdata',
    templateUrl: './postdata.component.html'
})

export class PostDataComponent implements OnInit {
    @Input() posts: any;
    @Input() editEnabled: boolean;
    @Output() editBtn = new Subject();
    constructor(private postdataservice: PostService) { }
    updatePost(post) {
        console.log(post)
        this.editBtn.next(post);
    }
    ngOnInit() {

    }

}