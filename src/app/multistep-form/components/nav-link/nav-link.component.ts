import { Component, Input } from '@angular/core';
import { Step } from '../../types/steps';
import { StepControlsService } from '../../services/step-controls.service';
import { formGuard } from '../../utils/form-guard';
import { SelectPlanFormService } from '../../services/select-plan-form.service';
import { PersonalInfoFormService } from '../../services/personal-info-form.service';

@Component({
  selector: 'app-nav-link',
  templateUrl: './nav-link.component.html',
  styleUrls: ['./nav-link.component.scss'],
})
export class NavLinkComponent {
  @Input() step!: Step;
  @Input() ordinalNumber!: number;

  constructor(
    private stepControlService: StepControlsService,
    private personalInfoFormService: PersonalInfoFormService,
    private selectPlanFormService: SelectPlanFormService
  ) {}

  get isSelected() {
    return this.stepControlService.isCurrentStep(this.step);
  }

  get canActivate() {
    const isPersonalInfoValid = this.personalInfoFormService.form.valid;
    const isSelectPlanValid = this.selectPlanFormService.form.valid;

    switch (this.step.path) {
      case '/form/personal-info': {
        return true;
      }

      case '/form/select-plan': {
        return isPersonalInfoValid;
      }

      default:
        return isPersonalInfoValid && isSelectPlanValid;
    }
  }
}
