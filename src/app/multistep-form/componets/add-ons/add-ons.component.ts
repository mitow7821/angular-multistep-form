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
    return this.stepControlService.defaultButtonConfigs.next;
  }

  get previousButtonConfig() {
    return this.stepControlService.defaultButtonConfigs.previous;
  }
}
