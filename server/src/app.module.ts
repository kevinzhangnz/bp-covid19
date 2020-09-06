import { HttpModule, Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CountryResolver } from './country/country.resolver';
import { SummaryResolver } from './summary/summary.resolver';
import { StatusResolver } from './status/status.resolver';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      debug: true,
      playground: true,
      sortSchema: true,
    }),
    HttpModule
  ],
  controllers: [AppController],
  providers: [AppService, CountryResolver, SummaryResolver, StatusResolver],
})
export class AppModule {}
