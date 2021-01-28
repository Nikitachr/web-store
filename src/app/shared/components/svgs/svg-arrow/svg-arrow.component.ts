import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { SvgComponent } from 'src/app/shared/components/svgs/svg.component';

@Component({
  selector: 'app-svg-arrow',
  templateUrl: './svg-arrow.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgArrowComponent extends SvgComponent {

  constructor() {
    super();
  }

}
