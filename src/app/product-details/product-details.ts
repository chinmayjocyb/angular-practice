import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { HttpService } from '../service/app.service';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { AppState, IProductList } from '../product-store/product-state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'product-details',
  standalone: true,
  imports: [RouterOutlet, MatIconModule, CommonModule],
  templateUrl: './product-details.html',
  styleUrl: './product-details.scss',
})
export class ProductDetailsComponent {
  title = 'products details';
  $products: Observable<IProductList[] | undefined>;
  ListData1: IProductList[] | undefined;
  constructor(
    private httpService: HttpService,
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<AppState>
  ) {
    this.$products = this.store.select('product');  
    this.$products.subscribe((data: any)=>{
      console.log('products=>',data, this.$products)
      this.ListData1 = data;
    }) 
  }
  emptyProductData = {
    id: 0,
    title: '',
    price: 0,
    description: '',
    category: '',
    image: '',
    rating: {
      rate: 0,
      count: 0,
    },
  };
  productData: IProductList = this.emptyProductData;
  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.httpService.getProductsDetails(params['productId']).subscribe({
        next: (v) => (this.productData = v),
      });
    });
  }
  counter(num: number) {
    const numberOfStars = Math.floor(num);
    return new Array(numberOfStars);
  }
  isNumberInteger(num: number) {
    return num % 1 != 0;
  }
  toProductListPage(): void {
    this.router.navigateByUrl('');
  }
}
