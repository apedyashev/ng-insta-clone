import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UiInputComponent } from './input.component';



@NgModule({
  declarations: [
    UiInputComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [UiInputComponent]
})
export class UiInputModule { }
