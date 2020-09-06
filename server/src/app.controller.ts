import { Controller, Get, Req } from '@nestjs/common';
import { AxiosResponse } from 'axios'
import { Request } from 'express';
import { Observable } from 'rxjs';

import { Country, Status, Summary } from '@interfaces/index';
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
  getCountries(@Req() request: Request): Observable<AxiosResponse<Country[]>> {
    const url = request.url;
    return this.appService.getCountries(url);
  }

  @Get('summary')
  getSummary(@Req() request: Request): Observable<AxiosResponse<Summary>> {
    const url = request.url;
    return this.appService.getSummary(url);
  }
}
