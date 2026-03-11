import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Default } from './default/default';
import { Methods } from './methods/methods';
import { PrepMethods } from './prep-methods/prep-methods';

const routes: Routes = [

  {
    path: '',
    component: Default,
    children: [
      { path: '', redirectTo: 'methods', pathMatch: 'full' },

      { path: 'methods', component: Methods },

      { path: 'prep-methods', component: PrepMethods }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SampleMasterRoutingModule { }
