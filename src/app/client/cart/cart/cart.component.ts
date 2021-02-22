import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartProductsComponent } from "src/app/client/cart/cart/shared/components/cart-products/cart-products.component";
import { CartCheckoutComponent } from "src/app/client/cart/cart/shared/components/cart-checkout/cart-checkout.component";
import { CartAcceptedComponent } from "src/app/client/cart/cart/shared/components/cart-accepted/cart-accepted.component";

export enum ECartState {
  Cart = 'Cart',
  Checkout = 'Checkout',
  Accepted = 'Accepted'
}

export interface State {
  state: ECartState;
  component: any;
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartComponent implements OnInit {

  cart = {
    state: ECartState.Cart,
    component: CartProductsComponent
  };

  checkout = {
    state: ECartState.Checkout,
    component: CartCheckoutComponent
  };

  accepted = {
    state: ECartState.Accepted,
    component: CartAcceptedComponent
  };

  public CartState = ECartState;
  public state$ = new BehaviorSubject<State>(this.cart);

  constructor() { }

  ngOnInit(): void {
  }

}
