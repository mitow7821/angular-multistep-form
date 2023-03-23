import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsDataService } from '../../services/forms-data.service';
import { StepControlsService } from '../../services/step-controls.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
})
export class SummaryComponent {
  constructor(
    private stepControlService: StepControlsService,
    private router: Router,
    private formDataService: FormsDataService
  ) {}

  get nextButtonConfig() {
    return {
      isSubmit: true,
      label: 'Confirm',
      action: () => {
        this.router.navigate(['/form/thank-you']);
      },
    };
  }

  get previousButtonConfig() {
    return this.stepControlService.defaultButtonConfigs.previous;
  }

  get formsData() {
    return this.formDataService.formsData;
  }
}
