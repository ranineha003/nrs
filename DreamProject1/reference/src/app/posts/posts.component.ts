import { Component, Input } from "@angular/core";
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from "@angular/forms";
import { PostService } from "../services";

@Component({
    selector: "app-posts",
    templateUrl: "./posts.component.html"
})

export class PostsComponent {
    postInfo: FormGroup;
    @Input() posts: any;
    buttonname: string = "Create Post";
    editmode: boolean = true;
    constructor(private postService: PostService, public fb:FormBuilder) {
        this.postInfo = this.fb.group({
            _id: '',
            title: this.fb.control('',Validators.required),
            tags: this.fb.array([this.fb.control('')]),
            post: ''
        });
        this.listPost();
    }
    //the name can be anything not really tags. The important thing is to give the same name in the html
    get all(){
        return this.postInfo.get('tags') as FormArray;
    }

    addTags(){
        this.all.push(this.fb.control(''));
    }

    createPost() {
        console.log(this.postInfo.value)
        if (this.editmode) {
            this.postService.createPost(this.postInfo.value).subscribe(val => {
                this.listPost();
            });
        }
        else
            this.postService.updatePost(this.postInfo.value).subscribe(val => {
                console.log(val);
                this.postInfo.reset();
                this.listPost();
            })
    }

    listPost() {
        this.postService.listProtected().subscribe((val) => {
            this.posts = val;
        })
    }

    deletePost(post) {
        this.postService.deletePost(post.value).subscribe(val => {
            console.log(val);
            this.postInfo.reset();
            this.buttonname = "Create Post";
            this.editmode = true;
            this.listPost();
        })
    }

    updatePost(data) {
        this.postInfo.patchValue(data);
        this.buttonname = "Update Post";
        this.editmode = false;
    }
}