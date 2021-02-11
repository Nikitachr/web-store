import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AppState } from 'src/app/core/reducers';
import { Store } from '@ngrx/store';
import { MatDialog } from '@angular/material/dialog';

import { ToggleMenuAction } from 'src/app/core/actions/ui.actions';
import { DialogComponent } from 'src/app/client/main-pages/shared/dialog/dialog.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {

  constructor(
    private store: Store<AppState>,
    private matDialog: MatDialog
    ) { }

  toggle(): void {
   this.store.dispatch(new ToggleMenuAction());
  }

  onStatus(): void {
    this.matDialog.open(DialogComponent, { panelClass: 'dialog' });
  }

}
