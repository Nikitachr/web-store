import { Action } from '@ngrx/store';

import { Product } from 'src/app/shared/models/product.model';

export enum CartActionTypes {
  addProduct = '[Cart] Add product',
  deleteProduct = '[Cart] Delete product',
  clearCart = '[Cart] Clear cart'
}

export class AddProductAction implements Action {
  readonly type = CartActionTypes.addProduct;
  constructor(public payload: Product) {
  }
}

export class DeleteProductAction implements Action {
  readonly type = CartActionTypes.deleteProduct;
  constructor(public payload: string) {
  }
}

export class ClearCartAction implements Action {
  readonly type = CartActionTypes.clearCart;
}

export type CartActions =
  AddProductAction
| DeleteProductAction
| ClearCartAction;
