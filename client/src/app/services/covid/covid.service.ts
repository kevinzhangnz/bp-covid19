import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { timeout } from 'rxjs/operators';

import { Configuration } from '@config/index';
import { Country, Status, Summary } from '@models/index';

@Injectable({
  providedIn: 'root'
})
export class CovidService {
  readonly countriesAPIURL: string;
  readonly countryAPIURL: string;
  readonly summaryAPIURL: string;
  readonly timeout: number;

  constructor(private config: Configuration,
              private http: HttpClient) {
    this.countriesAPIURL = this.config.HOST + this.config.COUNTRIES_PATH;
    this.countryAPIURL = this.config.HOST + this.config.COUNTRY_PATH;
    this.summaryAPIURL = this.config.HOST + this.config.SUMMARY_PATH;
    this.timeout = this.config.TIMEOUT;
  }

  /** GET Countries */
  getCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(this.countriesAPIURL).pipe(
      timeout(this.timeout)
    );
  }

  /** GET By Country All Status */
  getCountryStatus(country: string, params: any): Observable<Status[]> {
    return this.http.get<Status[]>(this.countryAPIURL + `/${country}`, {params}).pipe(
      timeout(this.timeout)
    );
  }

  /** GET Summary */
  getSummary(): Observable<Summary> {
    return this.http.get<Summary>(this.summaryAPIURL).pipe(
      timeout(this.timeout)
    );
  }

}
