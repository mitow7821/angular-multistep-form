import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MultistepFormComponent } from './multistep-form/multistep-form.component';

const routes: Routes = [
  { path: '', redirectTo: 'form', pathMatch: 'prefix' },
  {
    path: 'form',
    component: MultistepFormComponent,
    loadChildren: () =>
      import('./multistep-form/multistep-form.module').then(
        (m) => m.MultistepFormModule
      ),
  },
  { path: '**', redirectTo: 'form', pathMatch: 'prefix' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
