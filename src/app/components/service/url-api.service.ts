import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

import { Country } from '../interfaces/country';

@Injectable({
  providedIn: 'root'
})
export class UrlAPIService {

  private readonly UrlAPI = `https://restcountries.com/v2/all?fields=flag,name,capital`;

  constructor(private http: HttpClient) { }

  pegarTodosPaises() {
    return this.http.get<Country[]>(this.UrlAPI)
  }
}
