import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { PARAMS_PROVIDERS, URL_PARAMS } from 'src/app/shared/providers/catalog-params.provider';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [PARAMS_PROVIDERS]
})
export class CatalogComponent implements OnInit {

  constructor(@Inject(URL_PARAMS) readonly params$: Observable<any>) { }

  ngOnInit(): void {
    this.params$.subscribe(res => console.log(res));
  }
}
