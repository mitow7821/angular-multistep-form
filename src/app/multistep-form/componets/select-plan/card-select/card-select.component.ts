import { Component, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { PaymentPlan } from 'src/app/multistep-form/types/select-plan';

@Component({
  selector: 'app-card-select',
  templateUrl: './card-select.component.html',
  styleUrls: ['./card-select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: CardSelectComponent,
    },
  ],
})
export class CardSelectComponent implements ControlValueAccessor {
  @Input() paymentPlans: PaymentPlan[] = [];
  @Input() subscriptionType!: string;

  selectedPlan: PaymentPlan | null = null;

  selectPlan(value: PaymentPlan) {
    this.selectedPlan = value;

    this.onChange(this.selectedPlan);
    this.onTouched();
  }

  onChange(value: PaymentPlan | null) {}

  onTouched() {}

  writeValue(value: PaymentPlan | null) {
    this.selectedPlan = value;
  }

  registerOnChange(onChange: any) {
    this.onChange = onChange;
  }

  registerOnTouched(onTouched: any) {
    this.onTouched = onTouched;
  }
}
