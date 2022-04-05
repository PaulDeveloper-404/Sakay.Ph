import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JeepsnearbyPageRoutingModule } from './jeepsnearby-routing.module';

import { JeepsnearbyPage } from './jeepsnearby.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JeepsnearbyPageRoutingModule
  ],
  declarations: [JeepsnearbyPage]
})
export class JeepsnearbyPageModule {}
