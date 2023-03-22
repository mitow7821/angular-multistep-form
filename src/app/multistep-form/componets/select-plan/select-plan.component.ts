import { Component } from '@angular/core';
import { StepControlsService } from '../../services/step-controls.service';

@Component({
  selector: 'app-select-plan',
  templateUrl: './select-plan.component.html',
  styleUrls: ['./select-plan.component.scss'],
})
export class SelectPlanComponent {
  constructor(private stepControlService: StepControlsService) {}

  paymentPlans = [
    {
      name: 'Arcade',
      priceMonthly: '$9/mo',
      priceYearly: '$90/yr',
      yearlyDiscount: '2 months free',
      iconName: 'icon-arcade',
    },
    {
      name: 'Advanced',
      priceMonthly: '$12/mo',
      priceYearly: '$120/yr',
      yearlyDiscount: '2 months free',
      iconName: 'icon-advanced',
    },
    {
      name: 'Pro',
      priceMonthly: '$15/mo',
      priceYearly: '$150/yr',
      yearlyDiscount: '2 months free',
      iconName: 'icon-pro',
    },
  ];

  get nextButtonConfig() {
    return this.stepControlService.defaultButtonConfigs.next;
  }

  get previousButtonConfig() {
    return this.stepControlService.defaultButtonConfigs.previous;
  }
}
