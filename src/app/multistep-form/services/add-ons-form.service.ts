import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AddOn } from '../types/add-ons';

@Injectable()
export class AddOnsFormService {
  constructor(private fb: FormBuilder) {
    this.form.valueChanges.subscribe(() => {
      this.saveFormInSession();
    });
  }

  private readonly SESSION_KEY = 'addOnsForm';

  public addOns = [
    {
      name: 'Online service',
      description: 'Access to multiplayer games',
      priceMonthly: '+$1/mo',
      priceYearly: '+$10/yr',
    },
    {
      name: 'Larger storage',
      description: 'Extra 1TB of cloud save',
      priceMonthly: '+$2/mo',
      priceYearly: '+$20/yr',
    },
    {
      name: 'Customizable profile',
      description: 'Custom theme on your profile',
      priceMonthly: '+$2/mo',
      priceYearly: '+$20/yr',
    },
  ];

  public form = this.fb.group({
    addOns: [[] as AddOn[]],
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
