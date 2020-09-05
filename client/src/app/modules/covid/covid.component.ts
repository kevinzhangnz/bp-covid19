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
  countriesSubscription: Subscription;
  summarySubscription: Subscription;

  constructor(private service: CovidService) { }

  ngOnInit(): void {
    this.getCountries();
    this.getSummary();
  }

  ngOnDestroy(): void {
    this.countriesSubscription.unsubscribe();
    this.summarySubscription.unsubscribe();
  }

  /* GET Countries */
  getCountries(): void {
    this.countriesSubscription = this.service.getCountries()
      .subscribe(data => this.countries = data);
  }

  /* GET Summary */
  getSummary(): void {
    this.summarySubscription = this.service.getSummary()
      .subscribe(data => this.global = data.Global);
  }

}
