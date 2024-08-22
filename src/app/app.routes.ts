import { Routes } from '@angular/router';
import { ProductListComponent } from './product-list/app.product-list';
import { ProductDetailsComponent } from './product-details/product-details';

export const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'details/:productId', component: ProductDetailsComponent },
];
