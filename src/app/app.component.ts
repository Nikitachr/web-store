import { Component } from '@angular/core';
import { AppState, selectLoading } from 'src/app/reducers';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'web-store';
  loading$ = this.store.select(selectLoading);

  constructor(private store: Store<AppState>) {
  }






}


