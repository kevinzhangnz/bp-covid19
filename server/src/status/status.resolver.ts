import { Args, Query, Resolver } from '@nestjs/graphql';

import { Status } from '@models/index';
import { AppService } from '../app.service';

@Resolver(of => Status)
export class StatusResolver {
    constructor(private service: AppService) { }

    @Query(returns => Status)
    async status(@Args('country') country: string) {
        return this.service.getCountryStatus(country);
    }
}
