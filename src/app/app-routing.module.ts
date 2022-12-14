import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { RoutableModalContainerComponent } from './routable-modal-container/routable-modal-container.component';


const routes: Routes = [
  {
    path: '',
    component: PostsComponent,
    children: [
      { path: 'p/:id', component: RoutableModalContainerComponent, data: { component: PostDetailComponent } }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
