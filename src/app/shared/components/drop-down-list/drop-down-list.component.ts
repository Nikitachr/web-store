import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drop-down-list',
  templateUrl: './drop-down-list.component.html',
  styleUrls: ['./drop-down-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DropDownListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
