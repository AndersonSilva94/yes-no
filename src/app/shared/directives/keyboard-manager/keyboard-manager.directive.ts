import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appKeyboardManager]'
})
export class KeyboardManagerDirective {

  constructor() { }

  @HostListener('keyup', ['$event'])
  public manageKeys(event: KeyboardEvent): void {
    switch (event.key) {
      case 'ArrowUp':
        console.log('up')
        break;
      case 'ArrowDown':
        console.log('down')
        break
      case 'ArrowRight':
        console.log('right')
        break;
      case 'ArrowLeft':
        console.log('left')
        break
      default:
        break;
    }
  }

}
