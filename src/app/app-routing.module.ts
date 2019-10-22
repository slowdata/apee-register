import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistarFormComponent } from './components/registar-form/registar-form.component';

const routes: Routes = [{ path: 'registar', component: RegistarFormComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
