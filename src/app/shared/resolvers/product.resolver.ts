import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import { HttpClientService } from 'src/app/shared/services/http-client.service';
import { AppState } from 'src/app/core/reducers';
import { EndLoadingAction, StartLoadingAction } from 'src/app/core/actions/ui.actions';

@Injectable({
  providedIn: 'root'
})
export class ProductPageResolver implements Resolve<any> {
  constructor(private httpService: HttpClientService, private store: Store<AppState>) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    this.store.dispatch(new StartLoadingAction());
    return this.httpService.getProduct(route.params.id).pipe(
      tap(_ => this.store.dispatch(new EndLoadingAction()))
    );
  }
}
