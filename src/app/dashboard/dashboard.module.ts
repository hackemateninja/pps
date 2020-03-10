import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import {SharedModule} from '../shared/shared.module';
import {HomeComponent} from './home/home.component';
import { StoreComponent } from './store/store.component';
import { OrderComponent } from './order/order.component';
import { PrintComponent } from './print/print.component';
import {GetStoresService} from '../services/get-stores.service';
import {NgxPrintModule} from 'ngx-print';
import {NgxBarcodeModule} from 'ngx-barcode';



@NgModule({
  declarations: [
    HomeComponent,
    StoreComponent,
    OrderComponent,
    PrintComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    NgxPrintModule,
    NgxBarcodeModule
  ],
  providers: [GetStoresService]
})
export class DashboardModule { }
