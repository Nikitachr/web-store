import { Component, Inject, OnInit } from '@angular/core';
import { ScrollStrategy, ScrollStrategyOptions } from '@angular/cdk/overlay';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter, tap } from 'rxjs/operators';

import { translateInAnimation } from 'src/app/shared/animations/translateIn.animation';
import { AppState, selectMenu } from 'src/app/core/reducers';
import { BREAKPOINT, BREAKPOINT_PROVIDERS } from 'src/app/shared/providers/brakepoint.provider';
import { DisableMenuAction } from 'src/app/core/actions/ui.actions';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss'],
  animations: [translateInAnimation],
  providers: [BREAKPOINT_PROVIDERS]
})
export class MainViewComponent implements OnInit {

  isOpen = this.store.select(selectMenu);
  scrollStrategy: ScrollStrategy;

  constructor(
    @Inject(BREAKPOINT) readonly breakpoint$: Observable<boolean>,
    private readonly sso: ScrollStrategyOptions,
    private store: Store<AppState>
  ) {

  }
  ngOnInit(): void {
    this.scrollStrategy = this.sso.block();
    this.breakpoint$.pipe(
      filter(res => !res),
      tap(_ => this.store.dispatch(new DisableMenuAction()))
    ).subscribe();
  }

}
