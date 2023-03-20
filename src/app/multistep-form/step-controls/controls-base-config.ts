import { StepControlConfig } from '../types/steps';
import { StepControlsService } from './step-controls.service';
import { Injectable } from '@angular/core';

interface ControlsBaseConfigInterface {
  nextButtonConfig: StepControlConfig | undefined;
  previousButtonConfig: StepControlConfig | undefined;
}

@Injectable({ providedIn: 'any' })
export class ControlsBaseConfig {
  constructor(private stepControlService: StepControlsService) {}
}
