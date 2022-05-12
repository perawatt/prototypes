import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BusinessAddressPage } from './business-address.page';

const routes: Routes = [
  {
    path: '',
    component: BusinessAddressPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BusinessAddressPageRoutingModule {}
