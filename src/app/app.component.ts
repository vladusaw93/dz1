import {Component} from '@angular/core';
import {PostsService} from "./services/posts.service";
import {PostsModel} from "./models/postsModel";

@Component({
  selector: 'app-root',
  template: '<app-posts *ngFor="let p of posts" [post]="p"></app-posts>',
  styles: [``],
})
export class AppComponent {
  posts: PostsModel[];

  constructor(private postService: PostsService) {
    this.postService.getPosts().subscribe(value =>{this.posts = value;
      console.log(value);})
  }
}
