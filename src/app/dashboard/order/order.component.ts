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
  orderInfo: any;
  orderNumber: string;
  submittedTime: string;
  orderState: string;
  shippingGroup: any;
  commerceItems: any;
  numberOfBoxes: string;
  boxes = [];

  constructor(private order: GetStoresService, private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.getOrder(this.getOrderId(), this.getStoreId());
  }

  goBack(): void{
    window.history.back();
  }

  getNumberOfBoxes(event: any): string{
    this.numberOfBoxes = event.target.value.toString();
    if (this.boxes.length >= 1){
      this.boxes = [];
    }
    for (let i = 0; i <= parseInt(this.numberOfBoxes); i++){
      this.boxes.push(i);
    }
    return this.numberOfBoxes;
  }

  /*setNumberOfBoxes(event: any): any{
    for (let i = 0; i <= parseInt(this.numberOfBoxes); i++){
      this.boxes.push(i);
    }
    return this.boxes;
  }*/

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
