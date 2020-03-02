import { Component, OnInit } from '@angular/core';
import {GetStoresService} from '../../services/get-stores.service';

@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.scss']
})
export class StoresComponent implements OnInit {

  stores;

  constructor(private storesList: GetStoresService) { }

  ngOnInit(): void {
    this.getStores();
  }

  getStores() {
    this.storesList.getStores()
      .subscribe(
        res => {
          this.stores = res.storelist;
        }, error => console.error(error)
      );
  }



}
