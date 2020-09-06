import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class SummaryGlobal {
    @Field(type => Int)
    NewConfirmed: number;

    @Field(type => Int)
    TotalConfirmed: number;

    @Field(type => Int)
    NewDeaths: number;

    @Field(type => Int)
    TotalDeaths: number;

    @Field(type => Int)
    NewRecovered: number;

    @Field(type => Int)
    TotalRecovered: number;
}

@ObjectType()
export class SummaryCountry {
    Country: string;

    CountryCode: string;

    Slug: string;

    @Field(type => Int)
    NewConfirmed: number;

    @Field(type => Int)
    TotalConfirmed: number;

    @Field(type => Int)
    NewDeaths: number;

    @Field(type => Int)
    TotalDeaths: number;

    @Field(type => Int)
    NewRecovered: number;

    @Field(type => Int)
    TotalRecovered: number;

    @Field(type => Date)
    Date: Date;
}

@ObjectType()
export class Summary {
    Countries: SummaryCountry[];

    @Field(type => Date)
    Date: Date;

    Global: SummaryGlobal;
}
