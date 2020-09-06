import { Component, OnDestroy, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Subscription } from 'rxjs';

import { Country, Status } from '@models/index';

@Component({
  selector: 'app-covid',
  templateUrl: './covid.component.html',
  styleUrls: ['./covid.component.scss']
})
export class CovidComponent implements OnDestroy, OnInit {
  countries: Country[];
  countriesSummary: Status[];
  global: any;
  status: Status;
  selectedCountry: string;
  dataAvailable = true;
  private countriesSubscription: Subscription;
  private summarySubscription: Subscription;

  constructor(private apollo: Apollo) { }

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
   *  @param country: country Slug string used to filter the list
   */
  getCountryStatus(country: string): void {
    this.summarySubscription = this.apollo
      .watchQuery({
        query: gql`
          {
            summary {
              Countries {
                Slug,
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
        this.countriesSummary = result.data && result.data.summary.Countries;

        const summaryList = this.countriesSummary.filter(item => item.Slug === country);
        this.dataAvailable = summaryList.length > 0;

        const summary = summaryList[0] || null;

        if (summary) {
          const { Slug, ...status } = summary;
          this.status = status;
        }
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
