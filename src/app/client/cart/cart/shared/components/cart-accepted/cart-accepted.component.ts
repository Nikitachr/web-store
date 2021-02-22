import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-accepted',
  templateUrl: './cart-accepted.component.html',
  styleUrls: ['./cart-accepted.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartAcceptedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

