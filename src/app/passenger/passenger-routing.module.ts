import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PassengerPage } from './passenger.page';

const routes: Routes = [
  {
    path: '',
    component: PassengerPage,
    children: [
      {
        path: 'jeepsnearby',
        loadChildren: () => import('./jeepsnearby/jeepsnearby.module').then( m => m.JeepsnearbyPageModule)
      },
      {
        path: 'status',
        loadChildren: () => import('./status/status.module').then( m => m.StatusPageModule)
      },
      {
        path: 'account',
        loadChildren: () => import('./passengerAccount/account.module').then( m => m.AccountPageModule)
      },
      {
        path: '',
        redirectTo: 'jeepsnearby',
        pathMatch: 'full'
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PassengerPageRoutingModule {}
