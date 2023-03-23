import { Component, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

interface ToggleValueInput {
  value: unknown;
  label: string;
}
@Component({
  selector: 'app-toggle-switch',
  templateUrl: './toggle-switch.component.html',
  styleUrls: ['./toggle-switch.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: ToggleSwitchComponent,
    },
  ],
})
export class ToggleSwitchComponent implements ControlValueAccessor {
  @Input() leftValue!: ToggleValueInput;
  @Input() rightValue!: ToggleValueInput;

  value = false;

  onToggleClick(e: Event) {
    const value = (e.target as HTMLInputElement).checked;

    this.onToggle(value);
  }

  onChange(value: unknown) {}

  onTouched() {}

  writeValue(value: unknown) {
    this.value = this.leftValue.value === value ? false : true;
  }

  registerOnChange(onChange: any) {
    this.onChange = onChange;
  }

  registerOnTouched(onTouched: any) {
    this.onTouched = onTouched;
  }

  onToggle(value: boolean) {
    this.value = value;
    const returnValue = value ? this.rightValue : this.leftValue;

    this.onChange(returnValue.value);
    this.onTouched();
  }
}
