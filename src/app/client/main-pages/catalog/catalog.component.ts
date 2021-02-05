import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

import { PARAMS_PROVIDERS, URL_PARAMS } from 'src/app/shared/providers/catalog-params.provider';
import { BREAKPOINT, BREAKPOINT_PROVIDERS } from 'src/app/shared/providers/brakepoint.provider';
import { CATEGORIES } from 'src/app/shared/providers/category.provider';
import { Category } from 'src/app/shared/models/category.model';

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
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.params$.subscribe(res => console.log(res));
  }

  updateQueryParameters(): void {
    this.router.navigate(
      [],
      {
        queryParams: {
          genre: 'rpg'
        },
        queryParamsHandling: 'merge'
      }
    );
  }
}
