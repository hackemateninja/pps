import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {StoreComponent} from './store/store.component';
import {OrderComponent} from './order/order.component';
import {PrintComponent} from './print/print.component';
import {PrintPickSlipComponent} from './print-pick-slip/print-pick-slip.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'store/:id', component: StoreComponent
  },
  {
    path: 'order/:store/:id', component: OrderComponent
  },
  {
    path: 'print-order/:store/:id', component: PrintComponent
  },
  {
    path: 'print-all-picking-slip', component: PrintPickSlipComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
