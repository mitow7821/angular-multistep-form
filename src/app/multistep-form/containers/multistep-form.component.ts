import { Component } from '@angular/core';
import { StepControlsService } from '../services/step-controls.service';

@Component({
  selector: 'app-multistep-form',
  templateUrl: './multistep-form.component.html',
  styleUrls: ['./multistep-form.component.scss'],
})
export class MultistepFormComponent {
  constructor(private stepControlService: StepControlsService) {}

  get steps() {
    return this.stepControlService.steps;
  }
}
