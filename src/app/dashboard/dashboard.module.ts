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
import {NgxPaginationModule} from 'ngx-pagination';
import { PrintorderlabelComponent } from './components/printorderlabel/printorderlabel.component';
import { TitleContainerComponent } from './components/title-container/title-container.component';
import { UpcModalComponent } from './components/upc-modal/upc-modal.component';
import { BoxesModalComponent } from './components/boxes-modal/boxes-modal.component';



@NgModule({
  declarations: [
    HomeComponent,
    StoreComponent,
    OrderComponent,
    PrintComponent,
    PrintorderlabelComponent,
    TitleContainerComponent,
    UpcModalComponent,
    BoxesModalComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    NgxPrintModule,
    NgxBarcodeModule,
    NgxPaginationModule
  ],
  providers: [GetStoresService]
})
export class DashboardModule { }
