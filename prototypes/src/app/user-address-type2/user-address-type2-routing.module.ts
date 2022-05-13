import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserAddressType2Page } from './user-address-type2.page';

const routes: Routes = [
  {
    path: '',
    component: UserAddressType2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserAddressType2PageRoutingModule {}
