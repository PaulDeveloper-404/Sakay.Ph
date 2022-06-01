import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'

  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'passenger',
    loadChildren: () => import('./passenger/passenger.module').then( m => m.PassengerPageModule)
  },
  {
    path: 'driver',
    loadChildren: () => import('./driver/driver.module').then( m => m.DriverPageModule)
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./dialog/sign-up/sign-up.module').then( m => m.SignUpPageModule)
  },
  {
    path: 'createtrip',
    loadChildren: () => import('./dialog/createtrip/createtrip.module').then( m => m.CreatetripPageModule)
  },
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
