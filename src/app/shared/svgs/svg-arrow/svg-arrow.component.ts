import { Component } from '@angular/core';

import { SvgComponent } from 'src/app/shared/svgs/svg.component';

@Component({
  selector: 'app-svg-arrow',
  templateUrl: './svg-arrow.component.html'
})
export class SvgArrowComponent extends SvgComponent {

  constructor() {
    super();
  }

}
