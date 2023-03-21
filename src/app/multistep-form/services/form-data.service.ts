import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Injectable()
export class FormDataService {
  constructor(private fb: FormBuilder) {}

  public personalInfoForm = this.fb.group(
    {
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required]],
    },
    { updateOn: 'change' }
  );
}
