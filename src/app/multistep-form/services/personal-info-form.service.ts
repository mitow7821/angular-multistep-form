import { Injectable } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { debounceTime, delayWhen, of, switchMap, timer } from 'rxjs';

@Injectable()
export class PersonalInfoFormService {
  constructor(private fb: FormBuilder) {
    this.form.valueChanges.pipe(debounceTime(300)).subscribe(() => {
      this.saveFormInSession();
    });
  }

  private readonly SESSION_KEY = 'personalInfoForm';

  public form = this.fb.group(
    {
      name: ['', { asyncValidators: [this.delayedRequiredValidator] }],
      email: ['', { asyncValidators: [this.delayedRequiredValidator] }],
      phoneNumber: ['', { asyncValidators: [this.delayedRequiredValidator] }],
    },
    { updateOn: 'change' }
  );

  public saveFormInSession() {
    sessionStorage.setItem(this.SESSION_KEY, JSON.stringify(this.form.value));
  }

  public setFormValuesFromSession() {
    const val = sessionStorage.getItem(this.SESSION_KEY);

    if (val) {
      this.form.reset(JSON.parse(val));
    }
  }

  private delayedRequiredValidator(control: AbstractControl) {
    return of(control.touched).pipe(
      delayWhen((isTouched) => (isTouched ? timer(500) : of(undefined))),
      switchMap(() => of(Validators.required(control)))
    );
  }
}
