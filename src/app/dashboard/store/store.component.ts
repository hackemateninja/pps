import {Component, OnInit} from '@angular/core';
import {GetStoresService} from '../../services/get-stores.service';
import { ActivatedRoute, } from '@angular/router';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {
  loading = true;
  orders = [];
  store;
  sortedOrders = [];
  search;
  p;
  selected = 10;

  constructor(
    private storeService: GetStoresService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.getStore(this.getStoreId());
    this.handleLoading();
  }

  handleLoading(){
    if (this.sortedOrders.length === 0) {
      setTimeout(() => {
        this.loading = false;
      }, 2000);
    }
  }

  getStore(id) {
    this.storeService.getStoreById(id)
      .subscribe(
        res => {
          res.map(x=>{
            this.orders.push(x);
          });
          for (let i = 0; i < this.selected; i++) {
            this.sortedOrders.push(this.orders[i]);
          }
          return this.orders;
        }, error => error
      );
  }
  getStoreId(): number {
    this.route.paramMap.subscribe(params => {
      this.store = params.get('id');
    });
    return this.store;
  }

  selectChangeHandler (event: any) {
    this.selected = event.target.value;

    this.selected ? this.sortedOrders = [] : this.selected;
    this.p = 1;
    for (let i = 0; i < this.selected; i++) {
      this.sortedOrders.push(this.orders[i]);
    }
    return this.sortedOrders;
  }

  getSearch($event: any) {
    this.search = $event.target.value;
    console.log(this.search);
    this.orders.filter((x)=>{
      if (x.orderNumber == this.search || x.orderId == this.search || x.firstName == this.search || x.lastName == this.search){
        this.sortedOrders.push(x);
        return this.sortedOrders;
      }else if(this.search.length === 0 ){
        return this.sortedOrders;
      }
      return this.sortedOrders;
    })
  }

  changePage(){
    const sort = this.p;
    let calc;
    let start;
    sort === 1 ? start = 0 : start = this.selected * sort - this.selected;
    calc = start + parseInt(String(this.selected));
    this.sortedOrders = [];

    for (let i = start; i < calc; i++) {
      this.sortedOrders.push(this.orders[i]);
    }
    return this.sortedOrders;
  }



}
