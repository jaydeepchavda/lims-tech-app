import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Default } from './default/default';
import { Arcadis } from './arcadis/arcadis';
import { NJHazSiteNew } from './njhaz-site-new/njhaz-site-new';

const routes: Routes = [
    { path: '', redirectTo: 'default', pathMatch: 'full' },
      {
        path: 'default',
        component: Default,
      },
      {path:'Arcadis', component: Arcadis } ,
      {path:'NJHazSiteNew', component: NJHazSiteNew } ,

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EddRoutingModule { }
