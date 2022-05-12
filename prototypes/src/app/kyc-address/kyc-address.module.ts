import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KycAddressPageRoutingModule } from './kyc-address-routing.module';

import { KycAddressPage } from './kyc-address.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    KycAddressPageRoutingModule
  ],
  declarations: [KycAddressPage]
})
export class KycAddressPageModule {}
