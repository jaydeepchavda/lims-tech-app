import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Default } from './default/default';
import { CustomerEntry } from './customer-entry/customer-entry';
import { Invoice } from './invoice/invoice';
import { HomeSales } from './home-sales/home-sales';
import { ProjectSendOut } from './project-send-out/project-send-out';
import { NewQuote } from './new-quote/new-quote';
import { UpdateQuotationPriorityDetails } from './update-quotation-priority-details/update-quotation-priority-details';
import { UploadQuoteDocuments } from './upload-quote-documents/upload-quote-documents';
import { LoginSummaryDetails } from './login-summary-details/login-summary-details';

const routes: Routes = [
  { path: '', redirectTo: 'default', pathMatch: 'full' },

  // main route for sales module with child routes
  {
    path: '', component: Default,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },

      // components for sales module
      { path: 'HomeSales', component: HomeSales, data: { title: 'Home Sales' } },

      { path: 'CustomerEntry', component: CustomerEntry, data: { title: 'Add / Edit Customer' } },
      { path: 'Invoice', component: Invoice, data: { title: 'Invoice' } },
      { path: 'ProjectSendOut', component: ProjectSendOut, data: { title: 'Project Send Out' } },
      { path: 'NewQuote', component: NewQuote, data: { title: 'New Quote' } },
      { path: 'UpdateQuotationPriorityDetails', component: UpdateQuotationPriorityDetails, data: { title: 'Update Quotation Priority Details' } },
      { path: 'UploadQuoteDocument', component: UploadQuoteDocuments, data: { title: 'Upload Quote Documents' } },
      { path: 'LoginSummaryDetails', component:LoginSummaryDetails , data: { title: 'Login Summary Details' } },






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
