import { ChangeDetectionStrategy, Component } from '@angular/core';

import { SvgComponent } from 'src/app/shared/components/svgs/svg.component';

@Component({
  selector: 'app-svg-status',
  templateUrl: './svg-status.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgStatusComponent extends SvgComponent {

  constructor() {
    super();
  }

}
