import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Options, Product } from '../../types';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient ) { }

  get<t>(url: string, options: Options): Observable<t> {
    return this.httpClient.get<t>(url, options) as Observable<t>
  }

  post<t>(url: string, body: Product, options: Options): Observable<t> {
    return this.httpClient.post<t>(url, body, options) as Observable<t>
  }

  put<t>(url: string, body: Product, options: Options): Observable<t> {
    return this.httpClient.put<t>(url, body, options) as Observable<t>
  }

  delete<t>(url: string, options: Options): Observable<t> {
    return this.httpClient.delete<t>(url, options) as Observable<t>
  }
}

