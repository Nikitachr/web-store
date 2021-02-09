import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { DisableMenuAction } from 'src/app/actions/ui.actions';
import { marginAnimation } from 'src/app/shared/animations/margin.animation';
import { AppState } from 'src/app/reducers';
import { CATEGORIES } from 'src/app/shared/providers/category.provider';
import { Observable } from 'rxjs';
import { Category } from 'src/app/shared/models/category.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  animations: [marginAnimation],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuComponent implements OnInit {

  constructor(
    private store: Store<AppState>,
    @Inject(CATEGORIES) public categories$: Observable<Category>
  ) { }

  ngOnInit(): void {
  }

  click(): void {
    this.store.dispatch(new DisableMenuAction());
  }
}
