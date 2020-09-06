import { HttpService, Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Country, Status, Summary } from 'src/models/index';

@Injectable()
export class AppService {
  readonly publicApiUrl = 'https://api.covid19api.com';
  
  constructor(private httpService: HttpService) {}
  
  getCountryStatus(country: string): Observable<AxiosResponse<Status>> {
    const url = '/country/china';
    const params = {
      from: '2020-09-02T01:00:00Z',
      to: '2020-09-03T00:00:00Z'
    };
    return this.httpService.get(this.publicApiUrl + url, {params})
      .pipe(map(response => response.data));
  }

  getCountries(): Observable<AxiosResponse<Country[]>> {
    const url = '/countries';
    return this.httpService.get(this.publicApiUrl + url)
      .pipe(map(response => response.data));
  }

  getSummary(): Observable<AxiosResponse<Summary>> {
    const url = '/summary';
    return this.httpService.get(this.publicApiUrl + url)
      .pipe(map(response => response.data));
  }
}
