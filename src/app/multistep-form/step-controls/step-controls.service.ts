import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject, filter, tap } from 'rxjs';

@Injectable({ providedIn: 'any' })
export class StepControlsService {
  nextButtonConfig = {
    label: 'Next Step',
    action: () => {
      this.nextStep();
    },
  };

  previousButtonConfig = {
    label: 'Go Back',
    action: () => {
      this.previousStep();
    },
  };

  private readonly CURRENT_STEP_SESSION_KEY = 'current_step';
  public steps = [
    { path: '/form/personal-info', name: 'YOUR INFO', isDone: false },
    { path: '/form/select-plan', name: 'SELECT PLAN', isDone: false },
    { path: '/form/add-ons', name: 'ADD-ONS', isDone: false },
    { path: '/form/summary', name: 'SUMMARY', isDone: false },
  ];

  $currentStep = new BehaviorSubject(this.getCurrentStep());

  nextStep() {
    const index = this.steps.indexOf(this.$currentStep.getValue());
    const newStep = this.steps[index + 1];

    if (newStep) {
      this.$currentStep.next(newStep);
      this.router.navigate([this.$currentStep.getValue().path]);
    }
  }

  previousStep() {
    const index = this.steps.indexOf(this.$currentStep.getValue());
    const newStep = this.steps[index - 1];

    if (newStep) {
      this.$currentStep.next(newStep);
      this.router.navigate([this.$currentStep.getValue().path]);
    }
  }

  getCurrentStep() {
    const storageValue = sessionStorage.getItem(this.CURRENT_STEP_SESSION_KEY);

    return storageValue ? JSON.parse(storageValue) : this.steps.at(0);
  }

  setCurrentStepOnRouteChange() {
    console.log('set');
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        tap((e) => {
          const { url } = e as NavigationEnd;

          const newStep = this.steps.find((step) => url.includes(step.path));

          if (newStep) {
            this.$currentStep.next(newStep);
          }
        })
      )
      .subscribe();
  }

  constructor(private router: Router) {
    this.$currentStep.subscribe((step) => {
      console.log(step);
      sessionStorage.setItem(
        this.CURRENT_STEP_SESSION_KEY,
        JSON.stringify(step)
      );
    });

    this.setCurrentStepOnRouteChange();
  }
}
