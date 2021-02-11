import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { URL_PARAMS } from 'src/app/shared/providers/catalog-params.provider';
import { AppState } from 'src/app/core/reducers';
import { DeleteParamsAction } from 'src/app/core/actions/ui.actions';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OptionsComponent {

  options$ = this.params$.pipe(map(({ category, ...res }) => res ));

  constructor(
    @Inject(URL_PARAMS) readonly params$: Observable<any>,
    private store: Store<AppState>
  ) { }

  onDelete(item: string, key: unknown, value: string): void {
    const newOptions = { [key as string]: value.split(',').filter(el => el !== item).join(',') || null };
    this.store.dispatch(new DeleteParamsAction(newOptions));
  }

}
