import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostsComponent } from './posts/posts.component';
import { PostCardComponent } from './post-card/post-card.component';
import { ModalComponent, ModalBodyDirective } from './modal/modal.component';
import { ModalService } from './modal/modal.service';
import { RoutableModalContainerComponent } from './routable-modal-container/routable-modal-container.component';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    PostDetailComponent,
    PostsComponent,
    PostCardComponent,
    ModalComponent,
    ModalBodyDirective,
    RoutableModalContainerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AuthModule,
  ],
  providers: [ModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
