import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserAddressType2PageRoutingModule } from './user-address-type2-routing.module';

import { UserAddressType2Page } from './user-address-type2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserAddressType2PageRoutingModule
  ],
  declarations: [UserAddressType2Page]
})
export class UserAddressType2PageModule {}
