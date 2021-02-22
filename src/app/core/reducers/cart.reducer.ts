import { Product } from 'src/app/shared/models/product.model';
import { CartActions, CartActionTypes } from 'src/app/core/actions/cart.actions';

export interface CartState {
  products: Product[];
  price: number;
}

const initialCartState: CartState = {
  products: [],
  price: 0
};

export function cartReducer(state: CartState = initialCartState, action: CartActions): CartState {
  switch (action.type) {
    case CartActionTypes.addProduct:
      return {
        ...state,
        products: [ ...state.products, action.payload ],
        price: [...state.products]
          .map(product => product.price)
          .reduce((accumulator, currentValue) => accumulator + currentValue)
      };
    case CartActionTypes.deleteProduct:
      const newProducts = state.products.filter(el => el._id !== action.payload);
      return {
        ...state,
        products: newProducts,
        price: [...newProducts]
          .map(product => product.price)
          .reduce((accumulator, currentValue) => accumulator + currentValue)
      };
    case CartActionTypes.clearCart:
      return {
        ...state,
        products: [],
        price: 0
      };
    default:
      return state;
  }
}
