import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreatePhonePageRoutingModule } from './create-phone-routing.module';

import { CreatePhonePage } from './create-phone.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreatePhonePageRoutingModule
  ],
  declarations: [CreatePhonePage]
})
export class CreatePhonePageModule {}
