import { ChangeDetectionStrategy, Component } from '@angular/core';

import { EButtonType } from 'src/app/shared/components/navigation-button/navigation-button.component';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DialogComponent {

  type = EButtonType;
  constructor() { }

}
