import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { ScrollStrategy, ScrollStrategyOptions } from '@angular/cdk/overlay';
import { translateInAnimation } from 'src/app/shared/animations/translateIn.animation';
import { AppState, selectMenu } from 'src/app/reducers';
import { Store } from '@ngrx/store';
import { BREAKPOINT, BREAKPOINT_PROVIDERS } from 'src/app/shared/providers/brakepoint.provider';
import { Observable } from 'rxjs';
import { filter, tap } from "rxjs/operators";
import { DisableMenuAction } from "src/app/actions/ui.actions";

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
