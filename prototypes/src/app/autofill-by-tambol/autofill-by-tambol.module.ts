import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AutofillByTambolPageRoutingModule } from './autofill-by-tambol-routing.module';

import { AutofillByTambolPage } from './autofill-by-tambol.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    AutofillByTambolPageRoutingModule
  ],
  declarations: [AutofillByTambolPage]
})
export class AutofillByTambolPageModule {}
