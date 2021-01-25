import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SvgComponent } from 'src/app/shared/components/svgs/svg.component';

@Component({
  selector: 'app-svg-hamburger',
  templateUrl: './svg-hamburger.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgHamburgerComponent extends SvgComponent {

  constructor() {
    super();
  }

}
