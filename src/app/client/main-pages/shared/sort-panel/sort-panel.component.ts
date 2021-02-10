import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AppState, selectDefaultParams, selectParams } from 'src/app/reducers';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { UpdateParamsAction } from 'src/app/actions/ui.actions';

@Component({
  selector: 'app-sort-panel',
  templateUrl: './sort-panel.component.html',
  styleUrls: ['./sort-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SortPanelComponent implements OnInit {

  arr = { };
  defaultParams = this.store.select(selectDefaultParams);
  constructor(private store: Store<AppState>, private router: Router) { }

  ngOnInit(): void {
    this.store.select(selectParams).subscribe(res => this.arr = res);
  }

  onChange(value: string[], key: string): void {
    this.arr = { ...this.arr, [key]: value || null };
    this.store.dispatch(new UpdateParamsAction(this.arr));
  }
}
