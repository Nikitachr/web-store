import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ApiConstants } from 'src/app/shared/constants/api.constants';
import { Category } from 'src/app/shared/models/category.model';
import { Product } from "src/app/shared/models/product.model";

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  readonly ROOT_URL = 'https://ashop-backend.herokuapp.com/';

  constructor(private http: HttpClient) {
  }

  public getCategories(): Observable<any> {
    return this.http.get<any>(`${this.ROOT_URL + ApiConstants.categories}`);
  }

  public getCategory(id: any): Observable<any> {
    return this.http.get(`${this.ROOT_URL + ApiConstants.categories}/${id}`);
  }

  public getParams(id: any): Observable<any> {
    return this.http.get(`${this.ROOT_URL + ApiConstants.params}/${id}`);
  }

  public getProduct(id: string): Observable<Product> {
    return  this.http.get<Product>(`${this.ROOT_URL + ApiConstants.products}/${id}`);
  }

  public getPromo(): Observable<any> {
    return this.http.get(`${this.ROOT_URL + ApiConstants.promo}`);
  }

  public query(url: string): Observable<any> {
    return this.http.get(`${this.ROOT_URL}products?${url}`);
  }

}
