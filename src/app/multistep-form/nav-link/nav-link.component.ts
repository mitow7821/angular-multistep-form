import { Component, Input } from '@angular/core';
import { StepControlsService } from '../services/step-controls.service';
import { Step } from '../types/steps';

@Component({
  selector: 'app-nav-link',
  templateUrl: './nav-link.component.html',
  styleUrls: ['./nav-link.component.scss'],
})
export class NavLinkComponent {
  @Input() step!: Step;
  @Input() ordinalNumber!: number;

  get isSelected() {
    return this.stepControlService.isCurrentStep(this.step);
  }

  constructor(private stepControlService: StepControlsService) {}
}
