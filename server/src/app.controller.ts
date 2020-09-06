import { Controller, Get, Req } from '@nestjs/common';
import { AxiosResponse } from 'axios'
import { Request } from 'express';
import { Observable } from 'rxjs';

import { Country, Status, Summary } from 'src/models/index';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('country/*')
  getCountryStatus(@Req() request: Request): Observable<AxiosResponse<Status>> {
    const url = request.url;
    return this.appService.getCountryStatus(url);
  }

  @Get('countries')
  getCountries(): Observable<AxiosResponse<Country[]>> {
    return this.appService.getCountries();
  }

  @Get('summary')
  getSummary(): Observable<AxiosResponse<Summary>> {
    return this.appService.getSummary();
  }
}
