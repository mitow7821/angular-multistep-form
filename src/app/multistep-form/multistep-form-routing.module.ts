import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddOnsComponent } from './componets/add-ons/add-ons.component';
import { PersonalInfoComponent } from './componets/personal-info/personal-info.component';
import { SelectPlanComponent } from './componets/select-plan/select-plan.component';
import { SummaryComponent } from './componets/summary/summary.component';
import { ThankYouComponent } from './componets/thank-you/thank-you.component';
import { MultistepFormComponent } from './containers/multistep-form.component';

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
      },
      {
        path: 'add-ons',
        component: AddOnsComponent,
        title: 'Add-Ons',
      },
      {
        path: 'summary',
        component: SummaryComponent,
        title: 'Summary',
      },
      {
        path: 'thank-you',
        component: ThankYouComponent,
        title: 'Thank You',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MultistepFormRoutingModule {}
