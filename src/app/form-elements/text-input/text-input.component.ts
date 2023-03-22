import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  NG_VALUE_ACCESSOR,
  ControlValueAccessor,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

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
  @Input() control?: AbstractControl<any, any> | null;
  @Output() firstBlurEvent = new EventEmitter();

  get isValidationPending() {
    return this.control?.status === 'PENDING';
  }

  $afterFirstBlur = new BehaviorSubject(false);

  inputValue = '';

  onInput(event: Event) {
    this.inputValue = (event.target as HTMLInputElement).value;

    this.onChange(this.inputValue);
  }

  onBlur() {
    if (this.$afterFirstBlur.value === false) {
      this.firstBlurEvent.emit();
      this.$afterFirstBlur.next(true);
    }
  }

  onChange(value: string) {}

  onTouched() {}

  writeValue(value: string) {
    this.inputValue = value;
  }

  registerOnChange(onChange: any) {
    this.onChange = onChange;
  }

  registerOnTouched(onTouched: any) {
    this.onTouched = onTouched;
  }

  get error() {
    const isDirty = this.control?.dirty;
    const isAfterFirstBlur = this.$afterFirstBlur.value;

    return isDirty || isAfterFirstBlur
      ? this.getErrorMessage(this.control?.errors)
      : undefined;
  }

  private getErrorMessage(errors: ValidationErrors | null | undefined) {
    if (errors?.['required']) {
      return 'This field is required';
    }

    if (errors?.['email']) {
      return 'Invalid email address';
    }

    return;
  }
}
