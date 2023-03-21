import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultistepFormComponent } from './containers/multistep-form.component';
import { MultistepFormRoutingModule } from './multistep-form-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { TextInputModule } from '../form-elements/text-input/text-input.module';
import { AddOnsComponent } from './componets/add-ons/add-ons.component';
import { PersonalInfoComponent } from './componets/personal-info/personal-info.component';
import { SelectPlanComponent } from './componets/select-plan/select-plan.component';
import { SummaryComponent } from './componets/summary/summary.component';
import { ThankYouComponent } from './componets/thank-you/thank-you.component';
import { HeaderComponent } from './componets/header/header.component';
import { NavLinkComponent } from './componets/nav-link/nav-link.component';
import { StepControlsService } from './services/step-controls.service';
import { FormDataService } from './services/form-data.service';
import { StepControlsComponent } from './componets/step-controls/step-controls.component';

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
    NavLinkComponent,
  ],
  imports: [
    CommonModule,
    MultistepFormRoutingModule,
    ReactiveFormsModule,
    TextInputModule,
  ], 
  providers: [StepControlsService, FormDataService],
})
export class MultistepFormModule {}
