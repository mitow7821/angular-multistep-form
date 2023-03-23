import { Component, Host, Input } from '@angular/core';
import { AddOn } from 'src/app/multistep-form/types/add-ons';
import { MultiselectComponent } from '../multiselect/multiselect.component';

@Component({
  selector: 'app-multiselect-option',
  templateUrl: './multiselect-option.component.html',
  styleUrls: ['./multiselect-option.component.scss'],
})
export class MultiselectOptionComponent {
  @Input() addOn!: AddOn;
  @Input() subscriptionType!: string;

  constructor(@Host() public multiselectComponent: MultiselectComponent) {}
}
