import { ChangeDetectionStrategy, Component, ElementRef, Inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { PARAMS_PROVIDERS, URL_PARAMS } from 'src/app/shared/providers/catalog-params.provider';
import { BREAKPOINT, BREAKPOINT_PROVIDERS } from 'src/app/shared/providers/brakepoint.provider';

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
    private element: ElementRef
    ) { }

  ngOnInit(): void {

  }
}
