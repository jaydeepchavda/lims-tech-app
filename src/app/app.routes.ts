import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'lims/echem', pathMatch: 'full' },
  {
    path: 'lims/echem',
    loadChildren: () => import('./modules/echem/echem-module').then(m => m.EchemModule)
  }
];
