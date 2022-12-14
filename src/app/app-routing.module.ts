import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { ModalContainerComponent } from './modal-container/modal-container.component';


const routes: Routes = [
  {
    path: '',
    component: PostsComponent,
    children: [
      { path: 'p/:id', component: ModalContainerComponent, data: { component: PostDetailComponent } }
    ]
  },
  // { path: 'p/:id', component: ModalContainerComponent, outlet: 'modal' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
