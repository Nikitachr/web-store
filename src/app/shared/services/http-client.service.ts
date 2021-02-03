import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ApiConstants } from 'src/app/shared/constants/api.constants';
import { CategoryResponse } from 'src/app/shared/models/category-response.model';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  readonly ROOT_URL = 'https://ashop-backend.herokuapp.com/';

  constructor(private http: HttpClient) {
  }

  public getCategories(): Observable<CategoryResponse> {
    return this.http.get<CategoryResponse>(`${this.ROOT_URL + ApiConstants.categories}`);
  }

  public query(url: string): Observable<any> {
    return this.http.get(`${this.ROOT_URL + url}`);
  }

}
