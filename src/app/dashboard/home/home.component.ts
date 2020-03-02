import {Component, OnInit} from '@angular/core';
import {GetStoresService} from '../../services/get-stores.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

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
