import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreatetripPageRoutingModule } from './createtrip-routing.module';

import { CreatetripPage } from './createtrip.page';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreatetripPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CreatetripPage]
})
export class CreatetripPageModule {}
