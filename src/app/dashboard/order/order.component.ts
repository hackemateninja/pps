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
  boxesSelect = [1];
  itemStatus: string;

  idCommerceItem = null;


  constructor(
    private order: GetStoresService,
    private route: ActivatedRoute,
    ) { }

  ngOnInit(): void {
    this.getOrder(this.getOrderId(), this.getStoreId());
  }


  getNumberOfBoxes(event: any): Array<number>{
    this.numberOfBoxes = event.target.value.toString();
    return this.boxes = new Array(Number(this.numberOfBoxes));
  }

  getItemStatus(event: any): void{
    this.itemStatus = event.target.value;
    console.log(typeof this.itemStatus, this.itemStatus);
    this.idCommerceItem = this.itemStatus;
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
