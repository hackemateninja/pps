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
  constructor(
    private storeService: GetStoresService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.getStore(this.getStoreId());
    this.getNumber();
  }

  getNumber(): number {
    const q = document.getElementById('quantity');
    // @ts-ignore
    const {selectedIndex, options} = q;
    const strUser = options[selectedIndex].value;
    return strUser;
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
        }, error => error
      );
  }

}
