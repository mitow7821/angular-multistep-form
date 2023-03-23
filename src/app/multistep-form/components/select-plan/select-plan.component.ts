import { Component } from '@angular/core';
import { SelectPlanFormService } from '../../services/select-plan-form.service';
import { StepControlsService } from '../../services/step-controls.service';

@Component({
  selector: 'app-select-plan',
  templateUrl: './select-plan.component.html',
  styleUrls: ['./select-plan.component.scss'],
})
export class SelectPlanComponent {
  constructor(
    private stepControlService: StepControlsService,
    private selectPlanFormService: SelectPlanFormService
  ) {}

  get form() {
    return this.selectPlanFormService.form;
  }

  get paymentPlans() {
    return this.selectPlanFormService.paymentPlans;
  }

  get nextButtonConfig() {
    return {
      ...this.stepControlService.defaultButtonConfigs.next,
      disabled: this.form.valid === false,
    };
  }

  get previousButtonConfig() {
    return this.stepControlService.defaultButtonConfigs.previous;
  }
}
