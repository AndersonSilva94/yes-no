import { ContentChild, Directive, HostListener, QueryList } from '@angular/core';
import { KeyboardManagerItemDirective } from './keyboard-manager-item.directive';

@Directive({
  selector: '[appKeyboardManager]'
})
export class KeyboardManagerDirective {

  constructor() { }

  @ContentChild(KeyboardManagerItemDirective) public items: QueryList<KeyboardManagerItemDirective> = null;

  @HostListener('keyup', ['$event'])
  public manageKeys(event: KeyboardEvent): void {
    switch (event.key) {
      case 'ArrowUp':
        console.log(this.items);
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
