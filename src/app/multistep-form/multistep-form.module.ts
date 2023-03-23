import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultistepFormComponent } from './containers/multistep-form.component';
import { MultistepFormRoutingModule } from './multistep-form-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { TextInputModule } from '../form-elements/text-input/text-input.module';
import { AddOnsComponent } from './components/add-ons/add-ons.component';
import { PersonalInfoComponent } from './components/personal-info/personal-info.component';
import { SelectPlanComponent } from './components/select-plan/select-plan.component';
import { SummaryComponent } from './components/summary/summary.component';
import { ThankYouComponent } from './components/thank-you/thank-you.component';
import { HeaderComponent } from './components/header/header.component';
import { NavLinkComponent } from './components/nav-link/nav-link.component';
import { StepControlsService } from './services/step-controls.service';
import { PersonalInfoFormService } from './services/personal-info-form.service';
import { StepControlsComponent } from './components/step-controls/step-controls.component';
import { CardSelectComponent } from './components/select-plan/card-select/card-select.component';
import { CardSelectOptionComponent } from './components/select-plan/card-select-option/card-select-option.component';
import { ToggleSwitchModule } from '../form-elements/toggle-switch/toggle-switch.module';
import { SelectPlanFormService } from './services/select-plan-form.service';
import { MultiselectComponent } from './components/add-ons/multiselect/multiselect.component';
import { AddOnsFormService } from './services/add-ons-form.service';
import { MultiselectOptionComponent } from './components/add-ons/multiselect-option/multiselect-option.component';
import { FormsDataService } from './services/forms-data.service';

@NgModule({
  declarations: [
    CardSelectComponent,
    CardSelectOptionComponent,
    MultistepFormComponent,
    PersonalInfoComponent,
    SelectPlanComponent,
    AddOnsComponent,
    SummaryComponent,
    StepControlsComponent,
    ThankYouComponent,
    HeaderComponent,
    NavLinkComponent,
    CardSelectOptionComponent,
    MultiselectComponent,
    MultiselectOptionComponent,
  ],
  imports: [
    CommonModule,
    MultistepFormRoutingModule,
    ReactiveFormsModule,
    TextInputModule,
    ToggleSwitchModule,
  ],
  providers: [
    StepControlsService,
    PersonalInfoFormService,
    SelectPlanFormService,
    AddOnsFormService,
    FormsDataService,
  ],
})
export class MultistepFormModule {
  constructor(
    private selectPlanFormService: SelectPlanFormService,
    private personalInfoFormService: PersonalInfoFormService,
    private addOnsFormService: AddOnsFormService
  ) {
    this.selectPlanFormService.setFormValuesFromSession();
    this.personalInfoFormService.setFormValuesFromSession();
    this.addOnsFormService.setFormValuesFromSession();
  }
}
