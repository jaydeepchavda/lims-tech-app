import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Default } from './default/default';
import { User } from './user/user';

const routes: Routes =[
  { path: '', redirectTo: 'default', pathMatch: 'full' },
  {
    path: 'default',
    component: Default, 
    children: [
      { path: 'user', component: User }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
