import { Injectable } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { of, switchMap, timer } from 'rxjs';

@Injectable()
export class FormDataService {
  constructor(private fb: FormBuilder) {}

  public personalInfoForm = this.fb.group(
    {
      name: ['', { asyncValidators: [this.delayedRequiredValidator] }],
      email: [
        '',
        {
          asyncValidators: [
            this.delayedRequiredValidator,
            this.delayedEmailValidator,
          ],
        },
      ],
      phoneNumber: ['', { asyncValidators: [this.delayedRequiredValidator] }],
    },
    { updateOn: 'change' }
  );

  private delayedEmailValidator(control: AbstractControl) {
    return timer(500).pipe(switchMap(() => of(Validators.email(control))));
  }

  private delayedRequiredValidator(control: AbstractControl) {
    return timer(500).pipe(switchMap(() => of(Validators.required(control))));
  }
}
