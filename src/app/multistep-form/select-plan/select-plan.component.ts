import { Component } from '@angular/core';
import { StepControlsService } from '../step-controls/step-controls.service';

@Component({
  selector: 'app-select-plan',
  templateUrl: './select-plan.component.html',
  styleUrls: ['./select-plan.component.scss'],
})
export class SelectPlanComponent {
  constructor(private stepControlService: StepControlsService) {}

  get nextButtonConfig() {
    return {
      ...this.stepControlService.nextButtonConfig,
    };
  }

  get previousButtonConfig() {
    return {
      ...this.stepControlService.previousButtonConfig,
    };
  }
}
