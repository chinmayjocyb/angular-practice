import { Action, createReducer, on } from '@ngrx/store';
import { IProductList } from './product-data-reducer';
import { loadProductFail, loadProductSuccess, loadProducts } from './product.action';

export interface IProductState {
  products: IProductList[];
  error: string;
  status: string;
}

export const initialProductState: IProductState = {
  products: [],
  error: '',
  status: '',
};

export const productReducer = createReducer(
  initialProductState,
  on(loadProducts, (state) => ({ ...state, status: 'loading' })),

  on(loadProductSuccess, (state, { products }) => ({
    ...state,
    products: products,
    status: 'success',
    error: '',
  })),

  on(loadProductFail, (state, { error }) => ({
    ...state,
    products: [],
    status: 'error',
    error: error,
  }))
);

export function reducer(state: IProductState, action: Action) {
  return productReducer(state, action);
}
