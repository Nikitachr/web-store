import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-product-card',
  templateUrl: './cart-product-card.component.html',
  styleUrls: ['./cart-product-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartProductCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
