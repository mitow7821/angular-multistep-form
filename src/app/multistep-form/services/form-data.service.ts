import { Injectable } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { delay, map, of } from 'rxjs';

@Injectable()
export class FormDataService {
  constructor(private fb: FormBuilder) {}

  public personalInfoForm = this.fb.group(
    {
      name: [
        '',
        {
          asyncValidators: [this.delayedRequiredValidator],
        },
      ],
      email: [
        '',
        {
          validators: [Validators.required],
          asyncValidators: [this.delayedEmailValidator],
        },
      ],
      phoneNumber: [
        '',
        {
          asyncValidators: [this.delayedRequiredValidator],
        },
      ],
    },
    { updateOn: 'change' }
  );

  private delayedEmailValidator(control: AbstractControl) {
    return of(control.value).pipe(
      delay(500),
      map(() => Validators.email(control))
    );
  }

  private delayedRequiredValidator(control: AbstractControl) {
    return of(control.value).pipe(
      delay(500),
      map(() => Validators.required(control))
    );
  }
}
