import { Component } from '@angular/core';
import { FormBuilder, Validators, ValidationErrors } from '@angular/forms';
import { StepControlsService } from '../step-controls/step-controls.service';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss'],
})
export class PersonalInfoComponent {
  constructor(
    private stepControlService: StepControlsService,
    private fb: FormBuilder
  ) {}

  get nextButtonConfig() {
    return {
      ...this.stepControlService.nextButtonConfig,
      disabled: this.form.valid === false,
    };
  }

  form = this.fb.group(
    {
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required]],
    },
    { updateOn: 'change' }
  );

  onSubmit(e: SubmitEvent) {
    e.preventDefault();
  }

  getError(controlName: string) {
    const control = this.form.get(controlName);

    return control?.touched ? this.getErrorMessage(control?.errors) : undefined;
  }

  getErrorMessage(errors: ValidationErrors | null | undefined) {
    if (errors?.['required']) {
      return 'This field is required';
    }

    if (errors?.['email']) {
      return 'Invalid email address';
    }

    return;
  }
}
