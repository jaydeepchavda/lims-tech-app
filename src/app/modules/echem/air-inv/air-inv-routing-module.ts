import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Default } from './default/default';
import { RegulatorCleaning } from './regulator-cleaning/regulator-cleaning';
import { ResBill } from './res-bill/res-bill';

const routes: Routes = [
  { path: '', redirectTo: 'default', pathMatch: 'full' },
  {
    path: 'default',
    component: Default,
    children: [
      { path: 'RegulatorCleaning', component: RegulatorCleaning, data: { title: 'Regulator Cleaning' } },
      { path: 'Res-bill', component: ResBill, data: { title: 'Res-bill' } },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AirInvRoutingModule { }
