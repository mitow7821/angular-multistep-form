import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'form', pathMatch: 'prefix' },
  {
    path: 'form',
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
