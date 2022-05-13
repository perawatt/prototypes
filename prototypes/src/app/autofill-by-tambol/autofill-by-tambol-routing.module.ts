import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AutofillByTambolPage } from './autofill-by-tambol.page';

const routes: Routes = [
  {
    path: '',
    component: AutofillByTambolPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AutofillByTambolPageRoutingModule {}
