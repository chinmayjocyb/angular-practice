import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { HttpService } from '../service/app.service';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

export interface IProductList {
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

@Component({
  selector: 'product-details',
  standalone: true,
  imports: [RouterOutlet, MatIconModule, CommonModule],
  templateUrl: './product-details.html',
  styleUrl: './product-details.scss',
})
export class ProductDetailsComponent {
  title = 'products details';
  constructor(
    private httpService: HttpService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
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
