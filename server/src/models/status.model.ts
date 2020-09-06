import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Status {
    Country: string;

    CountryCode: string;

    Province: string;

    City: string;

    CityCode: string;

    Lat: string;

    Lon: string;

    @Field(type => Int)
    Confirmed: number;

    @Field(type => Int)
    Deaths: number;

    @Field(type => Int)
    Recovered: number;

    @Field(type => Int)
    Active: number;

    Date: Date;
}
