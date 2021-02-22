import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-header',
  templateUrl: './cart-header.component.html',
  styleUrls: ['./cart-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
