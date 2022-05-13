import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreatePhonePage } from './create-phone.page';

const routes: Routes = [
  {
    path: '',
    component: CreatePhonePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreatePhonePageRoutingModule {}
