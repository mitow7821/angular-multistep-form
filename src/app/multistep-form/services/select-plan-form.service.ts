import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PaymentPlan } from '../types/select-plan';

@Injectable()
export class SelectPlanFormService {
  constructor(private fb: FormBuilder) {
    this.form.valueChanges.subscribe(() => {
      this.saveFormInSession();
    });
  }

  private readonly SESSION_KEY = 'selectPlanForm';
  public paymentPlans = [
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

  public form = this.fb.group({
    paymentPlan: [null as PaymentPlan | null, Validators.required],
    subscriptionType: ['monthly'],
  });

  public saveFormInSession() {
    sessionStorage.setItem(this.SESSION_KEY, JSON.stringify(this.form.value));
  }

  public setFormValuesFromSession() {
    const val = sessionStorage.getItem(this.SESSION_KEY);

    if (val) {
      this.form.reset(JSON.parse(val));
    }
  }
}
