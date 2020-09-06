import { Controller, Get } from '@nestjs/common';
import { AxiosResponse } from 'axios'
import { Observable } from 'rxjs';

import { Country, Summary } from 'src/models/index';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('countries')
  getCountries(): Observable<AxiosResponse<Country[]>> {
    return this.appService.getCountries();
  }

  @Get('summary')
  getSummary(): Observable<AxiosResponse<Summary>> {
    return this.appService.getSummary();
  }
}
