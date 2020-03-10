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

  selected = 10;

  constructor(
    private storeService: GetStoresService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    if (this.sortedOrders.length === 0) {
      setTimeout(()=>{
        this.loading = false;
      }, 2000)
    }
    this.getStore(this.getStoreId());
    this.getSearch();
  }

  getSearch() {
    console.log(this.search);
  }

  selectChangeHandler (event: any) {
    this.selected = event.target.value;
    console.log(typeof  this.selected);

    this.selected ? this.sortedOrders = []: null;

    for (let i = 0; i < this.selected; i++) {
      this.sortedOrders.push(this.orders[i]);
    }
  }

  getStoreId(): number {
    this.route.paramMap.subscribe(params => {
      this.store = params.get('id');
    });
    return this.store;
  }

  getStore(id) {
    this.storeService.getStoreById(id)
      .subscribe(
        res => {
          this.orders = res;
          for (let i = 0; i < this.selected; i++) {
            this.sortedOrders.push(this.orders[i]);
          }
        }, error => error
      );
  }

}
