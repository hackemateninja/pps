import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetStoresService {

  storesUrl = 'http://ppsnext.us-east-1.elasticbeanstalk.com/api/getStoreList';
  storeIdUrl = 'http://ppsnext.us-east-1.elasticbeanstalk.com/api/getAllocatedOrders';
  orderIdUrl = 'http://ppsnext.us-east-1.elasticbeanstalk.com/api/getOrderInfoByOrderId';

  constructor(private http: HttpClient) { }

  getStores() {
    return this.http.get<any>(this.storesUrl);
  }

  getStoreById(id) {
    return this.http.get<any>(`${this.storeIdUrl}?storeId=${id}`);
  }

  getOrderById(id, store) {
    return this.http.get<any>(`${this.orderIdUrl}?orderId=${id}&storeId=${store}`);
  }
}
