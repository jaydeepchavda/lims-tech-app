import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Default } from './default/default';
import { RoleList } from './role-list/role-list';

const routes: Routes = [
  { path: '', redirectTo: 'default', pathMatch: 'full' },
  {
    path: 'default',
    component: Default,
    children: [
      { path: 'RoleList', component: RoleList, data: { title: 'RoleList' } },
      // { path: 'UserList', component: RoleList, data: { title: 'User List' } }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
