import { Component, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: TextInputComponent,
    },
  ],
})
export class TextInputComponent implements ControlValueAccessor {
  @Input() label?: string;
  @Input() error?: string;

  inputValue = '';

  onInput(event: Event) {
    this.inputValue = (event.target as HTMLInputElement).value;

    this.onChange(this.inputValue);
  }

  onChange(value: string) {}

  onTouched(value: boolean) {}

  writeValue(value: string) {
    this.inputValue = value;
  }

  registerOnChange(onChange: any) {
    this.onChange = onChange;
  }

  registerOnTouched(onTouched: any) {
    this.onTouched = onTouched;
  }
}
