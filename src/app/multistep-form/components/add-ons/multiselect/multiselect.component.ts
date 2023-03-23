import { Component, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { AddOn } from 'src/app/multistep-form/types/add-ons';

@Component({
  selector: 'app-multiselect',
  templateUrl: './multiselect.component.html',
  styleUrls: ['./multiselect.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: MultiselectComponent,
    },
  ],
})
export class MultiselectComponent implements ControlValueAccessor {
  @Input() addOns: AddOn[] = [];
  @Input() subscriptionType!: string;

  value: AddOn[] = [];

  toggleAddOn(value: AddOn) {
    if (this.isSelected(value)) {
      this.value = this.value.filter((e) => e.name !== value.name);
    } else {
      this.value.push(value);
    }

    this.onChange(this.value);
    this.onTouched();
  }

  isSelected(value: AddOn) {
    return !!this.value.find((e) => e.name === value.name);
  }

  onChange(value: AddOn[]) {}

  onTouched() {}

  writeValue(value: AddOn[]) {
    this.value = value;
  }

  registerOnChange(onChange: any) {
    this.onChange = onChange;
  }

  registerOnTouched(onTouched: any) {
    this.onTouched = onTouched;
  }
}
