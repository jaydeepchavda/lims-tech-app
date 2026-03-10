import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Default } from './default/default';
import { RegularCleaning } from './regular-cleaning/regular-cleaning';
import { ResBill } from '../air-inv/res-bill/res-bill';
import { ViewRegulator } from './view-regulator/view-regulator';
import { CanRegCleaningBatch } from './can-reg-cleaning-batch/can-reg-cleaning-batch';
import { CanRegViewCleaningBatch } from './can-reg-view-cleaning-batch/can-reg-view-cleaning-batch';
import { BOAICCBRelation } from './boaiccbrelation/boaiccbrelation';

const routes: Routes = [
  { path: '', redirectTo: 'default', pathMatch: 'full' },
  {
          path: 'default',
          component: Default, 
          children: [
            // This will match: .../login/default/new-login-order
          { path: 'Regulator-Cleaning', component: RegularCleaning , data: { title: 'RegularCleaning' } },
          { path: 'View-regulator', component: ViewRegulator , data: { title: 'View regulator' } },
          { path: 'canRagCleaningBatch', component: CanRegCleaningBatch, data: { title: 'Canister Cleaning Batch Creation' } },
          { path: 'canRagViewCleaningBatch', component: CanRegViewCleaningBatch, data: { title: 'View Canister Cleaning Batch' } },
          { path: 'boaiccbrelation', component: BOAICCBRelation, data: { title: 'add coc' } },

          { path: 'Res-bill', component: ResBill, data: { title: 'Res Bill' } },
          ]
          }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AirInvMainRoutingModule { }
