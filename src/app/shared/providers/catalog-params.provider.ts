import { Observable } from 'rxjs';
import { InjectionToken, Provider } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

export const URL_PARAMS = new InjectionToken<Observable<any>>(
  'A stream with url params',
);

export const PARAMS_PROVIDERS: Provider[] = [
  {
    provide: URL_PARAMS,
    deps: [ActivatedRoute],
    useFactory: organizationFactory,
  },
];

export function organizationFactory(route: ActivatedRoute): Observable<any> {
  return route.queryParams;
}
