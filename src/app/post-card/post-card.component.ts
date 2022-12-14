import { Component, Input } from '@angular/core';

import {   Post } from '../posts.service';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.less']
})
export class PostCardComponent {
  @Input() post!: Post;
}
