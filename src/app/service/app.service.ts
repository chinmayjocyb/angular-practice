import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState, IProductList } from '../product-store/product-state';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private url = 'https://fakestoreapi.com/products/';

  constructor(private http: HttpClient, private store: Store<AppState>) {}

  getProductsList() {
    return this.http.get<IProductList[]>(this.url).subscribe((data:IProductList[])=>{
       this.store.dispatch({
        type: 'SHOW_PRODUCT',
        payload: data
       })
    })
  }

  getProductsDetails(id: number): Observable<IProductList> {
    return this.http.get<IProductList>(this.url + id);
  }
}
