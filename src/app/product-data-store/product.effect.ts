import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HttpService } from '../service/app.service';
import { catchError, from, map, switchMap } from 'rxjs';
import { LOAD_PRODUCT, loadProductSuccess, loadProducts } from './product.action';
import { IProductList } from './product-data-reducer';

@Injectable()
export class ProductEffects {
  constructor(private actions: Actions, private service: HttpService) {}

  loadProducts$ = createEffect(() =>
    this.actions.pipe(
      ofType(LOAD_PRODUCT),
      switchMap(() => {
        console.log('hi1');
        return from(this.service.getProductsList()).pipe(
          map((product: IProductList[]) =>
            loadProductSuccess({ products: product })
          )
        );
      })
    )
  );
}
