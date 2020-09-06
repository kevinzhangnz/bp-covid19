import { Query, Resolver } from '@nestjs/graphql';

import { Country } from '@models/index';
import { AppService } from '../app.service';

@Resolver(of => Country)
export class CountryResolver {
    constructor(private service: AppService) { }

    @Query(returns => [Country])
    countries() {
        return this.service.getCountries();
    }
}
