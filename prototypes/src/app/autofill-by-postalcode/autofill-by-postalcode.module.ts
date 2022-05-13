import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AutofillByPostalcodePageRoutingModule } from './autofill-by-postalcode-routing.module';

import { AutofillByPostalcodePage } from './autofill-by-postalcode.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    AutofillByPostalcodePageRoutingModule
  ],
  declarations: [AutofillByPostalcodePage]
})
export class AutofillByPostalcodePageModule {}
