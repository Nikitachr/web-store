import { ChangeDetectionStrategy, Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { GlobalPositionStrategy, Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { SortPanelComponent } from 'src/app/client/main-pages/shared/sort-panel/sort-panel.component';
import { filter, first, takeUntil, tap } from 'rxjs/operators';

import { PARAMS_PROVIDERS } from 'src/app/shared/providers/catalog-params.provider';
import { BREAKPOINT, BREAKPOINT_PROVIDERS } from 'src/app/shared/providers/brakepoint.provider';
import { AppState, selectFilter } from 'src/app/reducers';
import { Store } from '@ngrx/store';
import { DisableFilterAction, ToggleFilterAction } from 'src/app/actions/ui.actions';

@Component({
  selector: 'app-up-panel',
  templateUrl: './up-panel.component.html',
  styleUrls: ['./up-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [PARAMS_PROVIDERS, BREAKPOINT_PROVIDERS]
})
export class UpPanelComponent implements OnInit, OnDestroy {

  unsub$ = new Subject<void>();
  showSort = false;
  position = GlobalPositionStrategy;
  filter$ = this.store.select(selectFilter);
  overlayRef: OverlayRef;

  constructor(
    @Inject(BREAKPOINT) readonly breakpoint$: Observable<boolean>,
    private overlay: Overlay,
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.breakpoint$.pipe(
      takeUntil(this.unsub$),
      tap(res => {
        if (!res) {
          this.store.dispatch(new DisableFilterAction());
          this.overlayRef?.dispose();
        }
      })
    ).subscribe();

    this.filter$.pipe(
      takeUntil(this.unsub$),
      filter(res => res === true),
      tap(_ => this.showOverlay())
    ).subscribe();
  }

  showOverlay(): void {
    const config = new OverlayConfig();
    config.positionStrategy = this.overlay.position()
      .global()
      .right('0')
      .top('0');
    config.height = '100vh';
    config.width = '350px';
    config.hasBackdrop = true;
    this.overlayRef = this.overlay.create(config);
    this.overlayRef.attach(new ComponentPortal(SortPanelComponent));
    this.overlayRef.backdropClick().pipe(first()).subscribe(() => {
      this.store.dispatch(new DisableFilterAction());
      this.overlayRef?.dispose();
    });
  }

  showFilter(): void {
    this.store.dispatch(new ToggleFilterAction());
  }

  ngOnDestroy(): void {
    this.unsub$.next();
    this.unsub$.complete();
  }

}
