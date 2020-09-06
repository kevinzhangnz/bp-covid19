import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Country, Status } from '@models/index';
import { CovidService } from '@services/index';

@Component({
  selector: 'app-covid',
  templateUrl: './covid.component.html',
  styleUrls: ['./covid.component.scss']
})
export class CovidComponent implements OnDestroy, OnInit {
  countries: Country[];
  global: any;
  status: Status;
  selectedCountry: string;
  dataAvailable = true;
  countriesSubscription: Subscription;
  statusSubscription: Subscription;
  summarySubscription: Subscription;

  constructor(private service: CovidService) { }

  ngOnInit(): void {
    this.getCountries();
    this.getSummary();
  }

  ngOnDestroy(): void {
    this.countriesSubscription.unsubscribe();
    this.summarySubscription.unsubscribe();
    this.statusSubscription ? this.statusSubscription.unsubscribe() : this.statusSubscription = null;
  }

  /* GET Countries */
  getCountries(): void {
    this.countriesSubscription = this.service.getCountries()
      .subscribe(data => {
        this.countries = data.sort((a, b) => a.Country.localeCompare(b.Country));
      });
  }

  /* GET Summary */
  getSummary(): void {
    this.summarySubscription = this.service.getSummary()
      .subscribe(data => this.global = data.Global);
  }

  /** GET By Country All Status
   *  @param country: country Slug string
   */
  getCountryStatus(country: string): void {
    const params = {
      from: '2020-09-02T01:00:00Z',
      to: '2020-09-03T00:00:00Z'
    };

    this.statusSubscription = this.service.getCountryStatus(country, params)
      .subscribe(data => {
        this.dataAvailable = data.length > 0;
        this.status = data[0] || null;
      });
  }

  /** onChange to trigger getCountryStatus
   *  @param $event: $event object from the dropdown change
   */
  onChange($event: Country): void {
    this.selectedCountry = $event ? $event.Country : '';
    $event ? this.getCountryStatus($event.Slug) : this.dataAvailable = true, this.status = null;
  }

}
