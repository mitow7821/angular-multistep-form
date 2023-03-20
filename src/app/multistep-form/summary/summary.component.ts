import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StepControlsService } from '../step-controls/step-controls.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
})
export class SummaryComponent {
  constructor(
    private stepControlService: StepControlsService,
    private router: Router
  ) {}

  get nextButtonConfig() {
    return {
      label: 'Confirm',
      action: () => {
        this.router.navigate(['/form/thank-you']);
      },
    };
  }

  get previousButtonConfig() {
    return {
      ...this.stepControlService.previousButtonConfig,
    };
  }
}
