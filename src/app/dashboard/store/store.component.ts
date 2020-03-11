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
  showCounter =  true;

  constructor(
    private storeService: GetStoresService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.getStore(this.getStoreId());
    this.handleLoading();
  }

  handleLoading(): void{
    if (this.sortedOrders.length === 0) {
      setTimeout(() => {
        this.loading = false;
      }, 2000);
    }
  }

  getStore(id): any {
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

  selectChangeHandler (event: any): any {
    this.selected = event.target.value;

    this.selected ? this.sortedOrders = [] : this.selected;
    this.p = 1;
    for (let i = 0; i < this.selected; i++) {
      this.sortedOrders.push(this.orders[i]);
    }
    return this.sortedOrders;
  }

  getSearch($event: any): any{
    this.search = $event.target.value;
    this.sortedOrders = [];
    let localOrders = this.orders
    localOrders.filter(x =>{
      if (this.search === x.orderNumber || this.search === x.orderId || this.search.toUpperCase() === x.firstName || this.search.toUpperCase() === x.lastName ){
        this.sortedOrders.push(x);
        this.showCounter = false;
      }else if(this.search.length === 0){
        this.p = 1;
        this.showCounter = true;
        this.sortedOrders = [];
        for (let i = 0; i < this.selected; i++) {
          this.sortedOrders.push(this.orders[i]);
        }
      }
      return this.sortedOrders;
    })
  }

  changePage(): any{
    const sort = this.p;
    let calc;
    let start;
    sort === 1 ? start = 0 : start = this.selected * sort - this.selected;
    calc = start + parseInt(String(this.selected));
    this.sortedOrders = [];

    for (let i = start; i < calc; i++) {
      this.sortedOrders.push(this.orders[i]);
    };
    return this.sortedOrders;
  }



}
