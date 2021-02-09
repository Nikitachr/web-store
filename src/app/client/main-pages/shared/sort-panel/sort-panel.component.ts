import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AppState, selectDefaultParams } from 'src/app/reducers';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

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
  }

  onChange(value: string[], key: string): void {
    this.arr = { ...this.arr, [key]: value || null };
    console.log(this.arr);
    this.router.navigate(
      [],
      {
        queryParams: this.arr,
        queryParamsHandling: 'merge'
      });
  }
}
