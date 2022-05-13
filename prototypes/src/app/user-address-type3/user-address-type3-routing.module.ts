import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserAddressType3Page } from './user-address-type3.page';

const routes: Routes = [
  {
    path: '',
    component: UserAddressType3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserAddressType3PageRoutingModule {}
