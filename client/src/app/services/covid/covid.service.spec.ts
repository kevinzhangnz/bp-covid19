import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { Configuration } from '@config/index';
import { Country, Summary } from '@models/index';
import { CovidService } from './covid.service';

describe('Service: Covid', () => {
  let service: CovidService;
  let httpTestingController: HttpTestingController;
  const configuration = new Configuration();

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [
        Configuration,
        CovidService
      ]
    });

    service = TestBed.inject(CovidService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should GET Countries', () => {
    const mock: Country[] = [new Country()];

    service.getCountries()
      .subscribe((data: Country[]) =>
        expect(data).toEqual(mock)
      );

    const req = httpTestingController.expectOne(service.countriesAPIURL);
    expect(req.request.method).toEqual('GET');
    req.flush(mock);
  });

  it('should GET Summary', () => {
    const mock: Summary = new Summary();

    service.getSummary()
      .subscribe((data: Summary) =>
        expect(data).toEqual(mock)
      );

    const req = httpTestingController.expectOne(service.summaryAPIURL);
    expect(req.request.method).toEqual('GET');
    req.flush(mock);
  });
});
