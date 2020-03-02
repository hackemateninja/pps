import { Component, OnInit } from '@angular/core';
import {GetStoresService} from '../../services/get-stores.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  store;
  orderId;
  orderInfo;

  constructor(private order: GetStoresService, private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.getOrder(this.getOrderId(), this.getStoreId());
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
  getOrder(id, store) {
    this.order.getOrderById(id, store)
      .subscribe(res => {
        this.orderInfo = res.result;
        console.log(this.orderInfo);
      }, error => {
        console.error(error);
      });
  }

}
