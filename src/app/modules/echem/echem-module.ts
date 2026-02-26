import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EchemRoutingModule } from './echem-routing-module';
// import { DashboardRoutingModule } from './dashboard/dashboard-routing-module';
import { Echem } from './echem';
import { RouterOutlet } from '@angular/router';
import { Header } from '../../header/header';
import { Footer } from '../../footer/footer';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EchemRoutingModule,
    RouterOutlet ,          
    Header,               
    Footer,   
  ]
})
export class EchemModule { }
