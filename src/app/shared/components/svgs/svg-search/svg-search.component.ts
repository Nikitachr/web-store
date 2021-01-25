import { ChangeDetectionStrategy, Component } from '@angular/core';

import { SvgComponent } from 'src/app/shared/components/svgs/svg.component';

@Component({
  selector: 'app-svg-search',
  templateUrl: './svg-search.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgSearchComponent extends SvgComponent{

  constructor() {
    super();
  }

}
