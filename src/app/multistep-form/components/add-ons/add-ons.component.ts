import { Component } from '@angular/core';
import { AddOnsFormService } from '../../services/add-ons-form.service';
import { SelectPlanFormService } from '../../services/select-plan-form.service';
import { StepControlsService } from '../../services/step-controls.service';

@Component({
  selector: 'app-add-ons',
  templateUrl: './add-ons.component.html',
  styleUrls: ['./add-ons.component.scss'],
})
export class AddOnsComponent {
  constructor(
    private stepControlService: StepControlsService,
    private addOnsFormService: AddOnsFormService,
    private selectPlanFormService: SelectPlanFormService
  ) {}

  get subscriptionType() {
    return this.selectPlanFormService.form.value.subscriptionType ?? 'monthly';
  }

  get form() {
    return this.addOnsFormService.form;
  }

  get addOns() {
    return this.addOnsFormService.addOns;
  }

  get nextButtonConfig() {
    return this.stepControlService.defaultButtonConfigs.next;
  }

  get previousButtonConfig() {
    return this.stepControlService.defaultButtonConfigs.previous;
  }
}
