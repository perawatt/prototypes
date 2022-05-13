import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AutofillByPostalcodePage } from './autofill-by-postalcode.page';

const routes: Routes = [
  {
    path: '',
    component: AutofillByPostalcodePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AutofillByPostalcodePageRoutingModule {}
