import { Component } from '@angular/core';
import { FormDataService } from '../../services/form-data.service';
import { StepControlsService } from '../../services/step-controls.service';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss'],
})
export class PersonalInfoComponent {
  constructor(
    private stepControlService: StepControlsService,
    private formDataService: FormDataService
  ) {}

  get nextButtonConfig() {
    return {
      ...this.stepControlService.nextButtonDefaultConfig,
      disabled: this.form.valid === false,
    };
  }

  get form() {
    return this.formDataService.personalInfoForm;
  }
}
