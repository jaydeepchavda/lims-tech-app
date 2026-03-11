import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Default } from './default/default';
import { RoleList } from './role-list/role-list';
import { RoleMaster } from './role-master/role-master';
import { NavMaster } from './nav-master/nav-master';

const routes: Routes = [
  { path: '', redirectTo: 'default', pathMatch: 'full' },
  {
    path: 'default',
    component: Default,
  },
  { path: 'RoleList', component: RoleList, data: { title: 'Role List' } },
  { path: 'RoleMaster', component: RoleMaster, data: { title: 'Role Master' } },
  { path: 'nav-master', component: NavMaster, data: { title: 'Nav Master' } },
  {
    path: 'sample-master',
    loadChildren: () =>
      import('./sample-master/sample-master-module')
        .then(m => m.SampleMasterModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
