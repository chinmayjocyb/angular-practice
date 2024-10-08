import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { AppState, IProductList } from '../product-store/product-state';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

@Component({
  selector: 'product-list',
  standalone: true,
  imports: [RouterOutlet, MatIconModule, CommonModule],
  templateUrl: './app.product-list.html',
  styleUrl: './app.product-list.scss',
})
export class ProductListComponent {
  title = 'products list';
  ListData: IProductList[] | undefined;
  $products: Observable<IProductList[]>;
  constructor(
    private router: Router,
    private store: Store<AppState>
  ) {
    this.$products = this.store.select(state => state.product);  
    this.$products.subscribe(data=>{
      this.ListData = data;
    })
  }

  ngOnInit() {
  }
  counter(num: number) {
    const numberOfStars = Math.floor(num);
    return new Array(numberOfStars);
  }
  isNumberInteger(num: number) {
    return num % 1 != 0;
  }
  toProductDetailsPage(id: number): void {
    this.router.navigate(['details', id.toString()]);
  }
}
