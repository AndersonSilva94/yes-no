import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appKeyboardManagerItem]'
})
export class KeyboardManagerItemDirective {

  constructor(
    private _elementRef: ElementRef<HTMLElement>
  ) { }

  public focus(): void {
    this._elementRef.nativeElement.focus();
  }

  public isFocused(): boolean {
    return this._elementRef.nativeElement === document.activeElement
  }
}
