import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserAddressType3PageRoutingModule } from './user-address-type3-routing.module';

import { UserAddressType3Page } from './user-address-type3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserAddressType3PageRoutingModule
  ],
  declarations: [UserAddressType3Page]
})
export class UserAddressType3PageModule {}
