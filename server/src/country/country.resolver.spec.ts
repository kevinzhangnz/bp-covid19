import { Test, TestingModule } from '@nestjs/testing';

import { CountryResolver } from './country.resolver';
import { AppService } from '../app.service';

describe('Resolver: Country', () => {
  let resolver: CountryResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CountryResolver, AppService],
    }).compile();

    resolver = module.get<CountryResolver>(CountryResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
