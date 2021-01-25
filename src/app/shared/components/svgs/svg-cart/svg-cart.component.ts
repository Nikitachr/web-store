import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { SvgComponent } from 'src/app/shared/components/svgs/svg.component';

@Component({
  selector: 'app-svg-cart',
  templateUrl: './svg-cart.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgCartComponent extends SvgComponent {

  constructor() {
    super();
  }

}
