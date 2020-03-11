import { Component, OnInit } from '@angular/core';
import {GetStoresService} from '../../services/get-stores.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-print',
  templateUrl: './print.component.html',
  styleUrls: ['./print.component.scss']
})
export class PrintComponent implements OnInit {

  store;
  orderId;
  orderInfo: any;
  orderNumber: string;
  submittedTime: string;
  orderState: string;
  shippingGroup: any;
  commerceItems: any;

  constructor(private order: GetStoresService, private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.getOrder(this.getOrderId(), this.getStoreId());
  }

  goBack(): void{
    window.history.back();
  }

  getStoreId(): number {
    this.route.paramMap.subscribe(params => {
      this.store = params.get('store');
    });
    return this.store;
  }

  getOrderId(): number {
    this.route.paramMap.subscribe(params => {
      this.orderId = params.get('id');
    });
    return this.orderId;
  }
  getOrder(id, store): any {
    this.order.getOrderById(id, store)
      .subscribe(res => {
        this.orderInfo = res.result;
        this.orderNumber = this.orderInfo.orderNumber.toString();
        this.orderState = this.orderInfo.stateAsString.toString();
        this.submittedTime = this.orderInfo.submittedTime.toString();
        this.shippingGroup =  this.orderInfo.shippingGroups;
        this.commerceItems = this.orderInfo.commerceItems;
        return this.orderInfo;
      }, error => {
        return this.orderInfo
      });
  }

}
