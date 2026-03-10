import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Default } from './default/default';
import { RoleList } from './role-list/role-list';
import { RoleMaster } from './role-master/role-master';

const routes: Routes = [
  { path: '', redirectTo: 'default', pathMatch: 'full' },
  {
    path: 'default',
    component: Default,
    // children:[
    //   {path: 'RoleList', component: RoleList, data: { title: 'RoleList'}}
    // ]
  },
  { path: 'RoleList', component: RoleList, data: { title: 'Role List' } },
  { path: 'RoleMaster', component: RoleMaster, data: { title: 'Role Master' } }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
