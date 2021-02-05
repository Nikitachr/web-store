import { Component } from '@angular/core';
import { AppState, selectLoading } from 'src/app/reducers';
import { Store } from '@ngrx/store';
import { fromEvent } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'web-store';
  loading$ = this.store.select(selectLoading);
  showBtn$ =  fromEvent(document, 'scroll').pipe(
    debounceTime(500),
    map(() => window.scrollY > 500)
  );

  constructor(private store: Store<AppState>) {
  }

  scrollToTop(): void {
    (function smoothscroll(): void {

      const currentScroll = document.documentElement.scrollTop || document.body.scrollTop;

      if (currentScroll > 0) {
        window.requestAnimationFrame(smoothscroll);
        window.scrollTo(0, currentScroll - (currentScroll / 8));
      }

    })();
  }
}


