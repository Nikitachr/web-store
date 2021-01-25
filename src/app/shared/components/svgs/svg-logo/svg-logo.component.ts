import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { SvgComponent } from 'src/app/shared/components/svgs/svg.component';

@Component({
  selector: 'app-svg-logo',
  templateUrl: './svg-logo.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgLogoComponent extends SvgComponent{

  constructor() {
    super();
  }

}
