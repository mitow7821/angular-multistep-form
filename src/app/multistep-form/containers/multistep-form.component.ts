import { Component } from '@angular/core';
import { PersonalInfoFormService } from '../services/personal-info-form.service';
import { SelectPlanFormService } from '../services/select-plan-form.service';
import { StepControlsService } from '../services/step-controls.service';

@Component({
  selector: 'app-multistep-form',
  templateUrl: './multistep-form.component.html',
  styleUrls: ['./multistep-form.component.scss'],
})
export class MultistepFormComponent {
  constructor(
    private stepControlService: StepControlsService,
    private selectPlanFormService: SelectPlanFormService,
    private personalInfoFormService: PersonalInfoFormService
  ) {
    this.selectPlanFormService.setFormValuesFromSession();
    this.personalInfoFormService.setFormValuesFromSession();
  }

  get steps() {
    return this.stepControlService.steps;
  }
}
