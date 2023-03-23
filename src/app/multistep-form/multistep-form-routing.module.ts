import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddOnsComponent } from './components/add-ons/add-ons.component';
import { PersonalInfoComponent } from './components/personal-info/personal-info.component';
import { SelectPlanComponent } from './components/select-plan/select-plan.component';
import { SummaryComponent } from './components/summary/summary.component';
import { ThankYouComponent } from './components/thank-you/thank-you.component';
import { MultistepFormComponent } from './containers/multistep-form.component';
import { formGuard } from './utils/form-guard';

const routes: Routes = [
  {
    path: '',
    component: MultistepFormComponent,
    children: [
      { path: '', redirectTo: 'personal-info', pathMatch: 'prefix' },
      {
        path: 'personal-info',
        component: PersonalInfoComponent,
        title: 'Personal Info',
      },
      {
        path: 'select-plan',
        component: SelectPlanComponent,
        title: 'Select Plan',
        canActivate: [() => formGuard('select-plan')],
      },
      {
        path: 'add-ons',
        component: AddOnsComponent,
        title: 'Add-Ons',
        canActivate: [() => formGuard('add-ons')],
      },
      {
        path: 'summary',
        component: SummaryComponent,
        title: 'Summary',
        canActivate: [() => formGuard('add-ons')],
      },
      {
        path: 'thank-you',
        component: ThankYouComponent,
        title: 'Thank You',
        canActivate: [() => formGuard('add-ons')],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MultistepFormRoutingModule {}
