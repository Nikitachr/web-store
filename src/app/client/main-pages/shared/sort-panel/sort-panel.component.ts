import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { AppState, selectParams } from 'src/app/reducers';
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
  defaultParams = this.store.select(selectParams);
  constructor(private store: Store<AppState>, private router: Router) { }

  ngOnInit(): void {
  }

  onCheck(value: boolean, item: string, key: string): void {
    this.arr = { ...this.arr, [key]: item };
    console.log(this.arr);
    console.log(new URLSearchParams(this.arr).toString());
    //console.log(value);
    //console.log(item);
    //console.log(key);
    this.router.navigate(
      [],
      {
        queryParams: this.arr,
        queryParamsHandling: 'merge', // remove to replace all query params by provided
      });
  }

}
