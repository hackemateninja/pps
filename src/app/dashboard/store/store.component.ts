import {Component, OnInit} from '@angular/core';
import {GetStoresService} from '../../services/get-stores.service';
import { ActivatedRoute, } from '@angular/router';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {

  orders;
  store;
  sortedOrders = [];

  selected = 10;

  constructor(
    private storeService: GetStoresService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.getStore(this.getStoreId());
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
