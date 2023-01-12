import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { UiCardModule } from '../ui/card/card.module';
import { UiInputModule } from '../ui/input/input.module';
import { UiButtonModule } from '../ui/button/button.module';
import { UiSharedModule } from '../ui/shared/shared.module';


@NgModule({
  declarations: [
    LoginPageComponent,
    RegisterPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AuthRoutingModule,
    UiCardModule,
    UiInputModule,
    UiButtonModule,
    UiSharedModule
  ]
})
export class AuthModule { }
