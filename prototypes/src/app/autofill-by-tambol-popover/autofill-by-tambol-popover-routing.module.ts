import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AutofillByTambolPopoverPage } from './autofill-by-tambol-popover.page';

const routes: Routes = [
  {
    path: '',
    component: AutofillByTambolPopoverPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AutofillByTambolPopoverPageRoutingModule {}
