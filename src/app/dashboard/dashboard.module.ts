import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import {SharedModule} from '../shared/shared.module';
import {HomeComponent} from './home/home.component';
import {StoresComponent} from './stores/stores.component';
import { StoreComponent } from './store/store.component';
import { OrderComponent } from './order/order.component';
import {TableComponent} from './components/table/table.component';
import { TableDetailsComponent } from './components/table-details/table-details.component';
import { PrintComponent } from './print/print.component';



@NgModule({
  declarations: [
    HomeComponent,
    StoresComponent,
    StoreComponent,
    OrderComponent,
    TableComponent,
    TableDetailsComponent,
    PrintComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
