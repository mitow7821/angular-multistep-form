import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import {
  BehaviorSubject,
  elementAt,
  filter,
  findIndex,
  from,
  switchMap,
  tap,
} from 'rxjs';
import { Step } from '../types/steps';

@Injectable()
export class StepControlsService {
  constructor(private router: Router) {
    this.onCurrentStepChange();

    this.onRouteChange();
  }

  private readonly CURRENT_STEP_SESSION_KEY = 'current_step';
  public steps: Step[] = [
    { path: '/form/personal-info', name: 'YOUR INFO' },
    { path: '/form/select-plan', name: 'SELECT PLAN' },
    { path: '/form/add-ons', name: 'ADD-ONS' },
    { path: '/form/summary', name: 'SUMMARY' },
  ];

  private stepFromSession = this.getStepFromSession();
  private $currentStep = new BehaviorSubject<Step>(
    this.stepFromSession ?? this.steps[0]
  );

  public defaultButtonConfigs = {
    next: {
      label: 'Next Step',
      action: this.nextStep.bind(this),
    },

    previous: {
      label: 'Go Back',
      action: this.previousStep.bind(this),
    },
  };

  public isCurrentStep(step: Step) {
    return this.$currentStep.value.path === step.path;
  }

  public nextStep() {
    this.changeCurrentStep(1);
  }

  public previousStep() {
    this.changeCurrentStep(-1);
  }

  private changeCurrentStep(indexOffset: number) {
    const $steps = from(this.steps);

    $steps
      .pipe(
        findIndex((step) => step.path === this.$currentStep.value.path),
        switchMap((index) => $steps.pipe(elementAt(index + indexOffset)))
      )
      .subscribe((nextStep) => {
        this.$currentStep.next(nextStep);
        this.router.navigate([nextStep.path]);
      });
  }

  private getStepFromSession(): Step | null {
    const storageValue = sessionStorage.getItem(this.CURRENT_STEP_SESSION_KEY);

    return storageValue ? JSON.parse(storageValue) : null;
  }

  private onRouteChange() {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        tap((e) => {
          const { url } = e as NavigationEnd;
          const newStep = this.steps.find((step) => url === step.path);

          if (newStep && newStep.path !== this.$currentStep.value.path) {
            this.$currentStep.next(newStep);
          }
        })
      )
      .subscribe();
  }

  private onCurrentStepChange() {
    this.$currentStep.subscribe(() => {
      this.saveStepInSession();
    });
  }

  private saveStepInSession() {
    sessionStorage.setItem(
      this.CURRENT_STEP_SESSION_KEY,
      JSON.stringify(this.$currentStep.value)
    );
  }
}
