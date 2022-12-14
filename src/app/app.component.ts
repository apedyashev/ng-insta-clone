import { Component } from '@angular/core';

// import { PostsService, Post } from './posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent  {
  title = 'insta-clone-ui';
  // posts: Post[] = [];

  // constructor(private postsService: PostsService) { }

  // ngOnInit(): void {
  //   this.getPosts();
  // }

  // getPosts(): void {
  //   this.postsService.getPosts()
  //   .subscribe(posts => this.posts = posts);
  // }
}
