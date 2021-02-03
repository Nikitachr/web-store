import { ChangeDetectionStrategy, Component, Inject, OnInit, SkipSelf } from '@angular/core';
import { marginAnimation } from 'src/app/shared/animations/margin.animation';
import { AppState } from 'src/app/reducers';
import { Store } from '@ngrx/store';

import { DisableMenuAction } from 'src/app/actions/ui.actions';
import { HttpClientService } from 'src/app/shared/services/http-client.service';
import { CategoryResponse } from 'src/app/shared/models/category-response.model';
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
    private store: Store<AppState>

  ) { }

  ngOnInit(): void {
  }

  click(): void {
    this.store.dispatch(new DisableMenuAction());
  }
}
