import {Component, Input, OnInit} from '@angular/core';
import {PostsModel} from "../models/postsModel";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  @Input()
  post: PostsModel;


  constructor() {}


  ngOnInit(): void {
  }
}
