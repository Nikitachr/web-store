import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-drop-down-list',
  templateUrl: './drop-down-list.component.html',
  styleUrls: ['./drop-down-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DropDownListComponent {

  constructor() { }

}
