import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';

import { DisableMenuAction } from 'src/app/core/actions/ui.actions';
import { marginAnimation } from 'src/app/shared/animations/margin.animation';
import { AppState } from 'src/app/core/reducers';
import { CATEGORIES } from 'src/app/shared/providers/category.provider';
import { Category } from 'src/app/shared/models/category.model';
import { DialogComponent } from 'src/app/client/main-pages/shared/dialog/dialog.component';

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
    @Inject(CATEGORIES) public categories$: Observable<Category>,
    private matDialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  click(): void {
    this.store.dispatch(new DisableMenuAction());
  }

  onStatus(): void {
    this.matDialog.open(DialogComponent, { panelClass: 'dialog' });
  }
}
