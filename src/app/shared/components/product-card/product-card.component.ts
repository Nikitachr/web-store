import { ChangeDetectionStrategy, Component, HostListener, Input, OnInit } from '@angular/core';

import { marginAnimation } from 'src/app/shared/animations/margin.animation';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  animations: [marginAnimation],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductCardComponent {

  isHover: boolean;
  @Input() price = 10;
  @Input() name = 'name';
  @Input() photo = 'photo';
  @Input() id = 'id';

  @HostListener('mouseenter', ['$event'])
  onHover(): void {
    this.isHover = true;
  }

  @HostListener('mouseleave', ['$event'])
  onUnhover(): void {
    this.isHover = false;
  }

  @HostListener('click', ['$event'])
  redirect(): void {
    console.log(this.id);
    this.router.navigate(['/product', this.id]);
  }

  constructor(private router: Router) { }

}
