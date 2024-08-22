import { createAction, props } from "@ngrx/store";
import { IProductList } from "./product-data-reducer";

export const LOAD_PRODUCT = '[Product Page] Load Product';

export const updateProduct = createAction('[Product Page] Update Product', props<{products:IProductList[]}>())

export const loadProducts = createAction(LOAD_PRODUCT)

export const loadProductSuccess = createAction('[Product Page] Load Product Success', props<{products:IProductList[]}>())

export const loadProductFail = createAction('[Product Page] Load Product Fail', props<{error:string}>())
