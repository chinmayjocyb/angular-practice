import { IProductList } from "./product-state";

export const ADD_PRODUCT = 'ADD_PRODUCT';
export const SHOW_PRODUCT = 'SHOW_PRODUCT';

export function addProductReducer(state: IProductList[] = [], action: any) {
  switch (action.type) {
    case ADD_PRODUCT:
      return [...state, action.payload];

    case SHOW_PRODUCT:
      return action.payload;

    default:
      return state;
  }
}
