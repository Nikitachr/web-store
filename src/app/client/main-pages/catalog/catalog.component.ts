import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { first, map } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import { PARAMS_PROVIDERS, URL_PARAMS } from 'src/app/shared/providers/catalog-params.provider';
import { BREAKPOINT, BREAKPOINT_PROVIDERS } from 'src/app/shared/providers/brakepoint.provider';
import { CATEGORIES } from 'src/app/shared/providers/category.provider';
import { Category } from 'src/app/shared/models/category.model';
import { AppState, selectParams } from 'src/app/reducers';
import { UpdateDefaultParamsAction, UpdateParamsAction } from 'src/app/actions/ui.actions';
import { HttpClientService } from 'src/app/shared/services/http-client.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [PARAMS_PROVIDERS, BREAKPOINT_PROVIDERS]
})
export class CatalogComponent implements OnInit {

  title: string;

  constructor(
    @Inject(URL_PARAMS) readonly params$: Observable<any>,
    @Inject(BREAKPOINT) readonly breakpoint$: Observable<boolean>,
    @Inject(CATEGORIES) private categories: Category[],
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<AppState>,
    private httpService: HttpClientService
    ) { }

  ngOnInit(): void {
    this.params$.subscribe(res => {
      const query = new URLSearchParams(res).toString();
      this.httpService.query(query).subscribe();
    });

    this.params$.pipe(
      first(),
      map(({ category, ...res }) => res ))
      .subscribe(res => this.store.dispatch(new UpdateParamsAction(res)));

    this.route.data.pipe(first()).subscribe(res => {
      this.store.dispatch(new UpdateDefaultParamsAction(res.data.params.data));
      this.title = res.data.category.data.full_name;
    });

    this.store.select(selectParams).subscribe(res => {
      this.router.navigate(
        [],
        {
          queryParams: res,
          queryParamsHandling: 'merge'
        });
    });
  }
}
