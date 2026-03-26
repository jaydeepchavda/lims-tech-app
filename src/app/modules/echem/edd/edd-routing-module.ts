import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Default } from './default/default';
import { Arcadis } from './arcadis/arcadis';
import { NJHazSiteNew } from './njhaz-site-new/njhaz-site-new';
import { ADRDefault } from './adrdefault/adrdefault';
import { ExcelEddRequestV1 } from './excel-edd-request-v1/excel-edd-request-v1';

const routes: Routes = [
    { path: '', redirectTo: 'default', pathMatch: 'full' },
      {
        path: 'default',
        component: Default,
      },
      {path:'Arcadis', component: Arcadis } ,
      {path:'NJHazSiteNew', component: NJHazSiteNew } ,
      {path: "ADRdefault",component: ADRDefault},
      {path: "ExcelEddRequestV1",component: ExcelEddRequestV1}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EddRoutingModule { }
