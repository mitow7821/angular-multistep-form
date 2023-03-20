import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultistepFormComponent } from './multistep-form.component';
import { MultistepFormRoutingModule } from './multistep-form-routing.module';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { SelectPlanComponent } from './select-plan/select-plan.component';
import { AddOnsComponent } from './add-ons/add-ons.component';
import { SummaryComponent } from './summary/summary.component';
import { StepControlsComponent } from './step-controls/step-controls.component';
import { StepControlsService } from './step-controls/step-controls.service';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { HeaderComponent } from './header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TextInputModule } from '../form-elements/text-input/text-input.module';

@NgModule({
  declarations: [
    MultistepFormComponent,
    PersonalInfoComponent,
    SelectPlanComponent,
    AddOnsComponent,
    SummaryComponent,
    StepControlsComponent,
    ThankYouComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    MultistepFormRoutingModule,
    ReactiveFormsModule,
    TextInputModule,
  ],
})
export class MultistepFormModule {}
