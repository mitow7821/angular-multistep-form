import { Component } from '@angular/core';
import { StepControlsService } from './step-controls/step-controls.service';

@Component({
  selector: 'app-multistep-form',
  templateUrl: './multistep-form.component.html',
  styleUrls: ['./multistep-form.component.scss'],
  providers: [StepControlsService],
})
export class MultistepFormComponent {
  constructor(private stepControlService: StepControlsService) {}

  get steps() {
    return this.stepControlService.steps;
  }
}
