import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sort-panel',
  templateUrl: './sort-panel.component.html',
  styleUrls: ['./sort-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SortPanelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
