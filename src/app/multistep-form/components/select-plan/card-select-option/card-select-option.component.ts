import { Component, Host, Input } from '@angular/core';
import { PaymentPlan } from 'src/app/multistep-form/types/select-plan';
import { CardSelectComponent } from '../card-select/card-select.component';

@Component({
  selector: 'app-card-select-option',
  templateUrl: './card-select-option.component.html',
  styleUrls: ['./card-select-option.component.scss'],
})
export class CardSelectOptionComponent {
  @Input() paymentPlan!: PaymentPlan;
  @Input() subscriptionType!: string;

  constructor(@Host() public cardSelectComponent: CardSelectComponent) {}
}
