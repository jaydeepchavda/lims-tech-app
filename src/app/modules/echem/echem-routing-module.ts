import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Echem } from './echem';

const routes: Routes = [
  {
    path: '',
    component: Echem, 
    children: [
      { path: '', redirectTo: 'dashboard/default', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard-module').then(m => m.DashboardModule)
      },
      {
        path: 'login',
        loadChildren: () => import('./login/login-module').then(m => m.LoginModule)
      },
      {
        path: 'AirInv',
        loadChildren: () => import('./air-inv/air-inv-module').then(m => m.AirInvModule)
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EchemRoutingModule { }
