import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface IProductList {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private url = 'https://fakestoreapi.com/products/';

  constructor(private http: HttpClient) {}

  getProductsList(): Observable<IProductList[]> {
    return this.http.get<IProductList[]>(this.url);
  }

  getProductsDetails(id: number): Observable<IProductList> {
    return this.http.get<IProductList>(this.url + id);
  }
}
