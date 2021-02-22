import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-checkout',
  templateUrl: './cart-checkout.component.html',
  styleUrls: ['./cart-checkout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartCheckoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
