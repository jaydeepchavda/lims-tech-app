import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Default } from './default/default';
import { RoleList } from './role-list/role-list';
import { RoleMaster } from './role-master/role-master';
import { NavMaster } from './nav-master/nav-master';
import { Search } from './search/search';
import { AddData } from './add-data/add-data';
import { UserList } from './user-list/user-list';

const routes: Routes = [
  { path: '', redirectTo: 'default', pathMatch: 'full' },
  {
    path: 'default',
    component: Default,
  },
  { path: 'RoleList', component: RoleList, data: { title: 'Role List' } },
  { path: 'userlist', component: UserList, data: { title: 'User List' } },

  { path: 'RoleMaster', component: RoleMaster, data: { title: 'Role Master' } },
  { path: 'nav-master', component: NavMaster, data: { title: 'Nav Master' } },
  { path: 'search', component: Search, data: { title: 'search' } },
  {
    path: 'addData', component: AddData, data: { title: 'addData' },
    children:[
      {
        path: 'sample-master', 
        loadChildren: () => import('../admin/sample-master/sample-master-module')
          .then(m => m.SampleMasterModule)
      }
    ] },


  // {
  //   path: 'sample-master',
  //   loadChildren: () =>
  //     import('./sample-master/sample-master-module')
  //       .then(m => m.SampleMasterModule)
  // }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
