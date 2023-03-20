import { Component, Input } from '@angular/core';
import { StepControlConfig } from '../types/steps';

@Component({
  selector: 'app-step-controls',
  templateUrl: './step-controls.component.html',
  styleUrls: ['./step-controls.component.scss'],
})
export class StepControlsComponent {
  @Input() previousButton: StepControlConfig | undefined;
  @Input('nextButton') nextButton: StepControlConfig | undefined;
}
