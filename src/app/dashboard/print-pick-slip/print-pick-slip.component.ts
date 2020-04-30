import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-print-pick-slip',
  templateUrl: './print-pick-slip.component.html',
  styleUrls: ['./print-pick-slip.component.scss']
})
export class PrintPickSlipComponent implements OnInit {

  orderInfo: any;
  orderNumber: string;
  submittedTime: string;
  orderState: string;
  shippingGroup: any;
  commerceItems: any;


  constructor() {
    this.orderNumber = "waiting for it"
    this.orderInfo = "waiting for it"
    this.submittedTime = "waiting for it"
    this.orderState = "waiting for it"
    this.shippingGroup = "waiting for it"
    this.commerceItems = "waiting for it"
  }

  ngOnInit(): void {
  }

}
