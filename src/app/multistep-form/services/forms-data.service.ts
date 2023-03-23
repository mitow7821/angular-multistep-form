import { Injectable } from '@angular/core';
import { AddOnsFormService } from './add-ons-form.service';
import { PersonalInfoFormService } from './personal-info-form.service';
import { SelectPlanFormService } from './select-plan-form.service';

@Injectable()
export class FormsDataService {
  constructor(
    private personalInfoFormService: PersonalInfoFormService,
    private selectPlanFormService: SelectPlanFormService,
    private addOnsFormService: AddOnsFormService
  ) {}

  get formsData() {
    return {
      personalInfo: this.personalInfoFormService.form.value,
      selectPlan: this.selectPlanFormService.form.value,
      addOns: this.addOnsFormService.form.value,
    };
  }
}
