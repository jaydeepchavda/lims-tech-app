import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Default } from './default/default';
import { CustomerEntry } from './customer-entry/customer-entry';
import { Invoice } from './invoice/invoice';

const routes: Routes = [
  { path: '', redirectTo: 'default', pathMatch: 'full' },

  // main route for sales module with child routes
  {
    path: '', component: Default,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },

      // components for sales module
      { path: 'CustomerEntry', component: CustomerEntry, data: { title: 'Add / Edit Customer' } },
      { path: 'Invoice', component: Invoice, data: { title: 'Invoice' } },

      // { path: 'home', component: SalesHomeComponent,   data: { title: 'Sales Home' }},
    ]
  }







  // { path: 'default', component: Default, data: { title: "Home Page" } },
  // { path: 'CustomerEntry', component: CustomerEntry, data: { title: 'Add / Edit Customer' } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesRoutingModule { }
