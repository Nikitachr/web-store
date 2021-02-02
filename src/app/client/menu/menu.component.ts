import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { marginAnimation } from 'src/app/shared/animations/margin.animation';
import { AppState } from 'src/app/reducers';
import { Store } from '@ngrx/store';
import { DisableMenuAction } from 'src/app/actions/ui.actions';

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
  }

  click(): void {
    this.store.dispatch(new DisableMenuAction());
  }
}
