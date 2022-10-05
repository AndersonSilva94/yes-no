import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { UniqueIdService } from '../../services/unique-id/unique-id.service';

@Component({
  selector: 'app-yes-no-button-group',
  templateUrl: './yes-no-button-group.component.html',
  styleUrls: ['./yes-no-button-group.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => YesNoButtonGroupComponent)
    }
  ]
})
export class YesNoButtonGroupComponent implements OnInit, ControlValueAccessor {

  @Input() disabled = false;
  @Input() public value: string = null;
  @Input() public label!: string;
  @Output() public valueChange = new EventEmitter<string>();
  public options = YesNoButtonGroupOptions;
  public id: string = null;
  public onChange = (value: string) => {};
  public onTouched = () => {};

  constructor(
    private uniqueIdService: UniqueIdService
  ) {}

  public writeValue(value: string): void { //muda o valor da view
    this.value = value
    this.onChange(this.value);
    this.valueChange.emit(this.value)
  }
  public registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }
  public registerOnTouched(fn: () => void): void {
    this.onTouched = fn
  }
  public setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  ngOnInit(): void {
    this.id = this.uniqueIdService.generateUniqueIdWithPrefix('yes-no-button-group')
  }

  public activate(value: string): void {
    this.writeValue(value)
  }
}

enum YesNoButtonGroupOptions {
  YES = 'yes',
  NO = 'no'
}
