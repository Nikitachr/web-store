import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-products',
  templateUrl: './cart-products.component.html',
  styleUrls: ['./cart-products.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
