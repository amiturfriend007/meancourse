import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {
  // posts = [
  //   {title:"first post", content:"This is first post\'s content"},
  //   {title:"Second post", content:"This is second post\'s content"},
  //   {title:"Third post", content:"This is third post\'s content"}
  // ]
  @Input() posts = [];

}
