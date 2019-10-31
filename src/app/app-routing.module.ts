import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistarFormComponent } from './components/registar-form/registar-form.component';
import { RegistosComponent } from './components/registos/registos.component';

const routes: Routes = [
  { path: 'registar', component: RegistarFormComponent },
  { path: 'registos', component: RegistosComponent },
  { path: '', redirectTo: '/registos', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
