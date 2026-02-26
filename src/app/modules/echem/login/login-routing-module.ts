import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Default } from './default/default';
import { NewLoginOrder } from './new-login-order/new-login-order';
import { SMDefault } from './smdefault/smdefault';
import { CoolerEntry } from './cooler-entry/cooler-entry';
import { NewCoolerEntry } from './new-cooler-entry/new-cooler-entry';
import { LoginLabels } from './login-labels/login-labels';

const routes: Routes = [
     { path: '', redirectTo: 'default', pathMatch: 'full' },
      {
        path: 'default',
        component: Default, 
        children: [
          // This will match: .../login/default/new-login-order
        { path: 'new-login-order', component: NewLoginOrder, data: { title: 'New Order' } },
        { path: 'smdefault', component: SMDefault, data: { title: 'Sample Management' } },
        { path: 'CoolerEntry', component: CoolerEntry, data: { title: 'Cooler Entry' } },
        { path: 'newCoolerEntry', component: NewCoolerEntry, data: { title: 'New Cooler Entry' } },
        { path: 'LoginLabels', component: LoginLabels, data: { title: 'Labels' } }




        ]
      }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
