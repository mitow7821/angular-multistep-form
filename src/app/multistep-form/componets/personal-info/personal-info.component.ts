import { Component } from '@angular/core';
import { PersonalInfoFormService } from '../../services/personal-info-form.service';
import { StepControlsService } from '../../services/step-controls.service';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss'],
})
export class PersonalInfoComponent {
  constructor(
    private stepControlService: StepControlsService,
    private personalInfoFormService: PersonalInfoFormService
  ) {}

  get nextButtonConfig() {
    return {
      ...this.stepControlService.defaultButtonConfigs.next,
      disabled: this.form.valid === false,
    };
  }

  get form() {
    return this.personalInfoFormService.form;
  }
}
