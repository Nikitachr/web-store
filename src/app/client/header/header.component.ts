import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/reducers';
import { Store } from '@ngrx/store';

import { ToggleMenuAction } from 'src/app/actions/ui.actions';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/client/main-pages/shared/dialog/dialog.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {

  constructor(
    private store: Store<AppState>,
    private matDialog: MatDialog
    ) { }

  ngOnInit(): void {
  }

  toggle(): void {
   this.store.dispatch(new ToggleMenuAction());
  }

  onStatus(): void {
    this.matDialog.open(DialogComponent, { panelClass: 'dialog' });
  }

}
