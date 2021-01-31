import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ScrollStrategy, ScrollStrategyOptions } from '@angular/cdk/overlay';
import { translateInAnimation } from 'src/app/shared/animations/translateIn.animation';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { AppState, selectMenu } from 'src/app/reducers';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss'],
  animations: [translateInAnimation]
})
export class MainViewComponent implements OnInit {

  isOpen = this.store.select(selectMenu);
  scrollStrategy: ScrollStrategy;

  constructor(private readonly sso: ScrollStrategyOptions, public breakpointObserver: BreakpointObserver, private store: Store<AppState>) {

  }
  ngOnInit(): void {
    this.scrollStrategy = this.sso.block();
  }

}
