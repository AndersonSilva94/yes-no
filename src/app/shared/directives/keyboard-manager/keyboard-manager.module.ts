import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KeyboardManagerDirective } from './keyboard-manager.directive';

@NgModule({
  declarations: [
    KeyboardManagerDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    KeyboardManagerDirective
  ]
})
export class KeyboardManagerModule { }
