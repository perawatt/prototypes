import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KycAddressPage } from './kyc-address.page';

const routes: Routes = [
  {
    path: '',
    component: KycAddressPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KycAddressPageRoutingModule {}
