import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { PersonalInfoFormService } from '../services/personal-info-form.service';
import { SelectPlanFormService } from '../services/select-plan-form.service';

export function formGuard(path: string) {
  const personalInfoFormService = inject(PersonalInfoFormService);
  const selectPlanFormService = inject(SelectPlanFormService);

  const isPersonalInfoValid = personalInfoFormService.form.valid;
  const isSelectPlanValid = selectPlanFormService.form.valid;

  switch (path) {
    case 'select-plan': {
      return formGuardResult(isPersonalInfoValid);
    }

    case 'add-ons': {
      const isValid = isPersonalInfoValid && isSelectPlanValid;

      return formGuardResult(isValid);
    }

    default:
      return true;
  }
}

function formGuardResult(isValid: boolean) {
  const router = inject(Router);

  return isValid ? true : router.navigate([router.url]);
}
