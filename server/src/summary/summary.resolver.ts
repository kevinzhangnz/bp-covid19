import { Query, Resolver } from '@nestjs/graphql';

import { Summary } from '../models/index';
import { AppService } from '../app.service';

@Resolver(of => Summary)
export class SummaryResolver {
    constructor(private service: AppService) { }

    @Query(returns => Summary)
    async summary() {
        return this.service.getSummary();
    }
}
