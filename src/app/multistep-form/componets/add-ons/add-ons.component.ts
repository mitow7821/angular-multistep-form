import { Component } from '@angular/core';
import { StepControlsService } from '../../services/step-controls.service';

@Component({
  selector: 'app-add-ons',
  templateUrl: './add-ons.component.html',
  styleUrls: ['./add-ons.component.scss'],
})
export class AddOnsComponent {
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
