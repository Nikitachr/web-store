import { Observable } from 'rxjs';
import { InjectionToken, Provider } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';

export const BREAKPOINT = new InjectionToken<Observable<boolean>>(
  'A stream with breakpoint',
);

export const BREAKPOINT_PROVIDERS: Provider = {
    provide: BREAKPOINT,
    deps: [BreakpointObserver],
    useFactory: organizationFactory,
  };

export function organizationFactory(breakpointObserver: BreakpointObserver): Observable<boolean> {
  return breakpointObserver
    .observe(['(max-width: 870px)'])
    .pipe(
      map((state: BreakpointState) => state.matches)
    );
}
