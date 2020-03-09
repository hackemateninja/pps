import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import {SharedModule} from '../shared/shared.module';
import {HomeComponent} from './home/home.component';
import { StoreComponent } from './store/store.component';
import { OrderComponent } from './order/order.component';
import {TableComponent} from './components/table/table.component';
import { TableDetailsComponent } from './components/table-details/table-details.component';
import { PrintComponent } from './print/print.component';
import { TablePrintComponent } from './components/table-print/table-print.component';
import {GetStoresService} from '../services/get-stores.service';



@NgModule({
  declarations: [
    HomeComponent,
    StoreComponent,
    OrderComponent,
    TableComponent,
    TableDetailsComponent,
    PrintComponent,
    TablePrintComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ],
  providers: [GetStoresService]
})
export class DashboardModule { }
