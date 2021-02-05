import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import { HttpClientService } from 'src/app/shared/services/http-client.service';
import { AppState } from 'src/app/reducers';
import { EndLoadingAction, StartLoadingAction } from 'src/app/actions/ui.actions';

@Injectable({
  providedIn: 'root'
})
export class ProductParamsResolver implements Resolve<any> {
  constructor(private httpService: HttpClientService, private store: Store<AppState>) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    this.store.dispatch(new StartLoadingAction());
    return this.httpService.query('products?category=6009bfa4e39c5a3510a19262').pipe(
      tap(_ => this.store.dispatch(new EndLoadingAction()))
    );
  }
}
