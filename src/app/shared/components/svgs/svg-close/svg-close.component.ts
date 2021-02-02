import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { SvgComponent } from 'src/app/shared/components/svgs/svg.component';

@Component({
  selector: 'app-svg-close',
  templateUrl: './svg-close.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgCloseComponent extends  SvgComponent {

  @Input() size = '14px';

  constructor() {
    super();
  }

}
