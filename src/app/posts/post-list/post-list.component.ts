import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { PostsService } from '../posts.service';
import { Post } from '../post.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {
  // posts = [
  //   {title:"first post", content:"This is first post\'s content"},
  //   {title:"Second post", content:"This is second post\'s content"},
  //   {title:"Third post", content:"This is third post\'s content"}
  // ]
  posts: Post[] = [];
  private postsSub: Subscription;

  constructor(public postsService:PostsService) {
  }

  ngOnDestroy () {
    this.postsSub.unsubscribe();
  }
  ngOnInit() {
    this.postsService.getPosts();
    this.postsSub = this.postsService.getPostUpdateListener().subscribe((posts: Post[]) => {
        this.posts = posts;
    });
  }
}
