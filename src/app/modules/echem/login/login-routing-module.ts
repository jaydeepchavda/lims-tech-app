import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Default } from './default/default';
import { NewLoginOrder } from './new-login-order/new-login-order';
import { SMDefault } from './smdefault/smdefault';
import { CoolerEntry } from './cooler-entry/cooler-entry';
import { NewCoolerEntry } from './new-cooler-entry/new-cooler-entry';
import { LoginLabels } from './login-labels/login-labels';
import { SubOutCoc } from './sub-out-coc/sub-out-coc';
import { QuoteTransferMain } from './quote-transfer-main/quote-transfer-main';
import { title } from 'process';
import { InsertSDGNo } from './insert-sdgno/insert-sdgno';
import { FrmSamTestCancel } from './frm-sam-test-cancel/frm-sam-test-cancel';

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
        { path: 'LoginLabels', component: LoginLabels, data: { title: 'Labels' } },
        { path:'sub-out-coc', component: SubOutCoc, data: { title: 'Sub Out Coc' }},
        { path: 'quote-transfer-main', component: QuoteTransferMain, data: {title: 'Quote Transfer'}},
        { path: 'insert-sdgno', component: InsertSDGNo, data: {title: 'Insert SDG No'}},
        { path: 'frmSam-test-cancel', component: FrmSamTestCancel, data: {title: 'Sample Test Cancel'}},
        ]
      }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
