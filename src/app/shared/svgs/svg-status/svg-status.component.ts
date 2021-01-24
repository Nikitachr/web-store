import { Component } from '@angular/core';

import { SvgComponent } from 'src/app/shared/svgs/svg.component';

@Component({
  selector: 'app-svg-status',
  templateUrl: './svg-status.component.html'
})
export class SvgStatusComponent extends SvgComponent {

  constructor() {
    super();
  }

}
