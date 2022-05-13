import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AutofillByTambolPopoverPageRoutingModule } from './autofill-by-tambol-popover-routing.module';

import { AutofillByTambolPopoverPage } from './autofill-by-tambol-popover.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    AutofillByTambolPopoverPageRoutingModule
  ],
  declarations: [AutofillByTambolPopoverPage]
})
export class AutofillByTambolPopoverPageModule {}
