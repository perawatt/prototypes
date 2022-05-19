import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SamplePagePageRoutingModule } from './sample-page-routing.module';

import { SamplePagePage } from './sample-page.page';

import { AutofillComponent } from '../autofill/autofill.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SamplePagePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [SamplePagePage,AutofillComponent]
})
export class SamplePagePageModule {}
