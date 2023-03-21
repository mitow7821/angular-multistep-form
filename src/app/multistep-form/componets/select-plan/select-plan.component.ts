import { Component } from '@angular/core';
import { StepControlsService } from '../../services/step-controls.service';

@Component({
  selector: 'app-select-plan',
  templateUrl: './select-plan.component.html',
  styleUrls: ['./select-plan.component.scss'],
})
export class SelectPlanComponent {
  constructor(private stepControlService: StepControlsService) {}

  get nextButtonConfig() {
    return {
      ...this.stepControlService.nextButtonDefaultConfig,
    };
  }

  get previousButtonConfig() {
    return {
      ...this.stepControlService.previousButtonDefaultConfig,
    };
  }
}
