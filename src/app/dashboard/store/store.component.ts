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
  orders;
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
    this.handleLoading()
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
          this.orders = res;
          for (let i = 0; i < this.selected; i++) {
            this.sortedOrders.push(this.orders[i]);
          }
          return this.sortedOrders;
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

    for (let i = 0; i < this.selected; i++) {
      this.sortedOrders.push(this.orders[i]);
    }
    return this.sortedOrders;
  }

  getSearch() {
    console.log(this.search);
  }

  changePage(){
    this.getStore(this.getStoreId());
    const sort = this.p;
    const calc = this.selected;
    let start;
    sort === 1 ? start = 0 : start = this.selected * sort - this.selected;

    sort === 1 || sort >1 ? this.sortedOrders = [] : this.sortedOrders;

    for (let i = this.orders[start]; i < calc; i++) {
      this.sortedOrders.push(this.orders[i]);
    }
    return this.sortedOrders;
  }



}
