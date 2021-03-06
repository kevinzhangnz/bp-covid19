import { HttpModule, Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CountryResolver } from './country/country.resolver';
import { SummaryResolver } from './summary/summary.resolver';

@Module({
  imports: [
    HttpModule,
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      debug: true,
      playground: true,
      sortSchema: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService, CountryResolver, SummaryResolver],
})
export class AppModule {}
