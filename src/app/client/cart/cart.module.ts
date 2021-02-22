import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveComponentModule } from '@ngrx/component';

import { CartHeaderComponent } from './cart/shared/components/cart-header/cart-header.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CartProductCardComponent } from './cart/shared/components/cart-products/cart-product-card/cart-product-card.component';
import { CartProductsComponent } from './cart/shared/components/cart-products/cart-products.component';
import { CartCheckoutComponent } from './cart/shared/components/cart-checkout/cart-checkout.component';
import { CartAcceptedComponent } from './cart/shared/components/cart-accepted/cart-accepted.component';

const routes: Routes = [
  {
    path: '',
    component: CartComponent
  }
];


@NgModule({
  declarations: [
    CartComponent,
    CartHeaderComponent,
    CartProductCardComponent,
    CartProductsComponent,
    CartCheckoutComponent,
    CartAcceptedComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    ReactiveComponentModule
  ]
})
export class CartModule { }
