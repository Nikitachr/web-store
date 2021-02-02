import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalPositionStrategy, Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { SortPanelComponent } from 'src/app/client/main-pages/shared/sort-panel/sort-panel.component';
import { first } from 'rxjs/operators';

import { PARAMS_PROVIDERS } from 'src/app/shared/providers/catalog-params.provider';
import { BREAKPOINT, BREAKPOINT_PROVIDERS } from 'src/app/shared/providers/brakepoint.provider';

@Component({
  selector: 'app-up-panel',
  templateUrl: './up-panel.component.html',
  styleUrls: ['./up-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [PARAMS_PROVIDERS, BREAKPOINT_PROVIDERS]
})
export class UpPanelComponent implements OnInit {

  showSort = false;
  isFilter = false;
  position = GlobalPositionStrategy;

  constructor(@Inject(BREAKPOINT) readonly breakpoint$: Observable<boolean>, private overlay: Overlay) { }

  ngOnInit(): void {
  }

  showFilter(): void {
    this.isFilter = !this.isFilter;
    if (!this.isFilter) {
      return;
    }
    const config = new OverlayConfig();
    config.positionStrategy = this.overlay.position()
      .global()
      .right('0')
      .top('0');
    config.height = '100vh';
    config.width = '350px';
    config.hasBackdrop = true;
    const overlayRef = this.overlay.create(config);
    overlayRef.attach(new ComponentPortal(SortPanelComponent));
    overlayRef.backdropClick().pipe(first()).subscribe(() => {
      this.isFilter = false;
      overlayRef.dispose();
    });
  }

}
