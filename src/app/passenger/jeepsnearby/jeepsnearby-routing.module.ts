import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JeepsnearbyPage } from './jeepsnearby.page';

const routes: Routes = [
  {
    path: '',
    component: JeepsnearbyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JeepsnearbyPageRoutingModule {}
