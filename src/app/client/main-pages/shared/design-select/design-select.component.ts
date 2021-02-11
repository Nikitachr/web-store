import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-design-select',
  templateUrl: './design-select.component.html',
  styleUrls: ['./design-select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DesignSelectComponent {

  @Input() name: string;
  @Input() color: string;
  @Input() selected: boolean;

  constructor() { }

}
