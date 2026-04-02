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
        path: 'air-inv-main',
        loadChildren: () => import('./air-inv-main/air-inv-main-module').then(m => m.AirInvMainModule)
      },
      {
        path: 'admin',
        loadChildren: () => import('./admin/admin-module').then(m => m.AdminModule)
      },
      {
        path: 'CHEMEDD',
        loadChildren: () => import('./edd/edd-module').then(m => m.EddModule)
      },
      {
        path: 'Sales',
        loadChildren: () => import('./sales/sales-module').then(m => m.SalesModule)
      }

    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EchemRoutingModule { }
