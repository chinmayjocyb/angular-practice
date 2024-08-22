import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { HttpService } from '../service/app.service';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

import { IProductList } from '../product-details/product-details';


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
  constructor(
    private router: Router,
    private httpService: HttpService,
  ) {}

  ngOnInit() {
    this.httpService.getProductsList().subscribe({
      next: (v) => (this.ListData = v),
    });
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
