import { Observable, of } from 'rxjs';
import { InjectionToken, Provider } from '@angular/core';
import { first, map, tap } from 'rxjs/operators';

import { HttpClientService } from 'src/app/shared/services/http-client.service';
import { CategoryResponse } from 'src/app/shared/models/category-response.model';
import { Category } from 'src/app/shared/models/category.model';


export const CATEGORIES = new InjectionToken<Observable<Category[]>>(
  'A stream with categories',
);


export function organizationFactory(httpClientService: HttpClientService): Observable<Category[]> {
  return httpClientService.getCategories().pipe(
    first(),
    map((res: CategoryResponse) => res.data),
  );
}
