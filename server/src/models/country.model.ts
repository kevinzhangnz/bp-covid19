
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Country {
    Country: string;

    Slug: string;

    ISO2: string;
}
