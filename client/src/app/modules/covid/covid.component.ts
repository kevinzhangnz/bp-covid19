import { Component, OnDestroy, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
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
  private countriesSubscription: Subscription;
  private statusSubscription: Subscription;
  private summarySubscription: Subscription;

  constructor(private apollo: Apollo,
              private service: CovidService) { }

  ngOnInit(): void {
    this.getCountries();
    this.getSummary();
  }

  ngOnDestroy(): void {
    this.countriesSubscription.unsubscribe();
    this.statusSubscription ? this.statusSubscription.unsubscribe() : this.statusSubscription = null;
    this.summarySubscription.unsubscribe();
  }

  /* GET Countries */
  getCountries(): void {
    this.countriesSubscription = this.apollo
      .watchQuery({
        query: gql`
          {
            countries {
              Country,
              Slug,
            }
          }
        `,
      })
      .valueChanges.subscribe((result: any) => {
        this.countries = result.data && result.data.countries;
      });
  }

  /* GET Summary */
  getSummary(): void {
    this.summarySubscription = this.apollo
      .watchQuery({
        query: gql`
          {
            summary {
              Global {
                NewConfirmed,
                TotalConfirmed,
                NewDeaths,
                TotalDeaths,
                NewRecovered,
                TotalRecovered
              }
            }
          }
        `,
      })
      .valueChanges.subscribe((result: any) => {
        this.global = result.data && result.data.summary.Global;
      });
  }

  /** GET By Country All Status
   *  @param country: country Slug string
   */
  getCountryStatus(country: string): void {
    this.statusSubscription = this.apollo
      .watchQuery({
        query: gql`
          {
            status(country: ${country}) {
              Active,
              Confirmed,
              Deaths,
              Recovered
            }
          }
        `,
      })
      .valueChanges.subscribe((result: any) => {
        // this.status = result.data && result.data.status;

        this.dataAvailable = result.data.status.length > 0;
        this.status = result.data.status[0] || null;
      });

    // this.statusSubscription = this.service.getCountryStatus(country)
    //   .subscribe(data => {
    //     this.dataAvailable = data.length > 0;
    //     this.status = data[0] || null;
    //   });
  }

  /** onChange to trigger getCountryStatus
   *  @param $event: $event object from the dropdown change
   */
  onChange($event: Country): void {
    this.selectedCountry = $event ? $event.Country : '';
    $event ? this.getCountryStatus($event.Slug) : this.dataAvailable = true, this.status = null;
  }

}
