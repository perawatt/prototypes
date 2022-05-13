import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BusinessAddressPageRoutingModule } from './business-address-routing.module';

import { BusinessAddressPage } from './business-address.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BusinessAddressPageRoutingModule
  ],
  declarations: [BusinessAddressPage]
})
export class BusinessAddressPageModule {}
