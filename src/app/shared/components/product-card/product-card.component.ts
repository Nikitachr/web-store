import { Component, HostListener, OnInit } from '@angular/core';
import { marginAnimation } from 'src/app/shared/animations/margin.animation';
import { opacityAnimation } from 'src/app/shared/animations/opacity.animation';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  animations: [marginAnimation]
})
export class ProductCardComponent implements OnInit {

  isHover: boolean;

  @HostListener('mouseenter', ['$event'])
  onHover(): void {
    this.isHover = true;
  }

  @HostListener('mouseleave', ['$event'])
  onUnhover(): void {
    this.isHover = false;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
