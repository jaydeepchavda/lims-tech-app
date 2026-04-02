import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Default } from './default/default';
import { CustomerEntry } from './customer-entry/customer-entry';

const routes: Routes = [
  { path: '', redirectTo: 'default', pathMatch: 'full' },
  {
    path: '',
    component: Default, // This component contains your Navbar
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      // {
      //   path: 'home',
      //   component: SalesHomeComponent, // Create a small component for your "Home" content
      //   data: { title: 'Sales Home' }
      // },
      {
        path: 'CustomerEntry',
        component: CustomerEntry,
        data: { title: 'Add / Edit Customer' }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesRoutingModule { }
