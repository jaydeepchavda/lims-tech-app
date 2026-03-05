import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Default } from './default/default';
import { RegularCleaning } from './regular-cleaning/regular-cleaning';
import { ResBill } from '../air-inv/res-bill/res-bill';

const routes: Routes = [
  { path: '', redirectTo: 'default', pathMatch: 'full' },
  {
          path: 'default',
          component: Default, 
          children: [
            // This will match: .../login/default/new-login-order
          { path: 'Regulator-Cleaning', component: RegularCleaning , data: { title: 'RegularCleaning' } },
          { path: 'Res-bill', component: ResBill, data: { title: 'Res Bill' } },
          ]
          }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AirInvMainRoutingModule { }
