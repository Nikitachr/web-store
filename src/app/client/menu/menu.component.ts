import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { marginAnimation } from 'src/app/shared/animations/margin.animation';
import { AppState } from 'src/app/reducers';
import { Store } from '@ngrx/store';
import { DisableMenu } from 'src/app/actions/ui.actions';
import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  animations: [marginAnimation],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    console.log();
  }

  click(): void {
    this.store.dispatch(new DisableMenu());
  }
}
