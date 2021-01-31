import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, OnInit, Output } from '@angular/core';
import { AppState } from 'src/app/reducers';
import { Store } from '@ngrx/store';
import { ToggleMenu } from 'src/app/actions/ui.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {



  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {

  }

  toggle(): void {
   this.store.dispatch(new ToggleMenu());
  }


}
