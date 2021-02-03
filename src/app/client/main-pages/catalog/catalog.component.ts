import { ChangeDetectionStrategy, Component, ElementRef, Inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { PARAMS_PROVIDERS, URL_PARAMS } from 'src/app/shared/providers/catalog-params.provider';
import { BREAKPOINT, BREAKPOINT_PROVIDERS } from 'src/app/shared/providers/brakepoint.provider';
import { CATEGORIES } from 'src/app/shared/providers/category.provider';
import { Category } from 'src/app/shared/models/category.model';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs/operators';
import { AppState } from 'src/app/reducers';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [PARAMS_PROVIDERS, BREAKPOINT_PROVIDERS]
})
export class CatalogComponent implements OnInit {

  constructor(
    @Inject(URL_PARAMS) readonly params$: Observable<any>,
    @Inject(BREAKPOINT) readonly breakpoint$: Observable<boolean>,
    @Inject(CATEGORIES) private categories: Category[],
    private route: ActivatedRoute,
    private store: Store<AppState>,
    private element: ElementRef
    ) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => console.log('Data :', data));
  }
}
