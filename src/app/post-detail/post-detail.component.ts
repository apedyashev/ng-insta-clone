import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { switchMap } from 'rxjs/operators';

import { PostsService, Post } from '../posts.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.less']
})
export class PostDetailComponent implements OnInit {
  post: Post | undefined;

  constructor(private postsService: PostsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.postsService.getPostById(id).subscribe(post => {
      console.log('post', post)
      this.post = post
    })

    // this.post$ = this.route.paramMap.pipe(
    //   switchMap((params: ParamMap) =>
    //     this.postsService.getPostById(params.get('id')!)
    //   )
    // );
  }

  // getPosts(): void {
  //   this.postsService.getPostById()
  //   .subscribe(post => this.post = post);
  // }
}
