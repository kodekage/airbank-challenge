import 'reflect-metadata';
import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Transactions {
    @Field(type => String)
    id: string;

    @Field((type) => String, { nullable: true })
    account?: string | null

    @Field((type) => String, { nullable: true })
    description?: string | null

    @Field((type) => String, { nullable: true })
    category?: string | null

    @Field((type) => String, { nullable: true })
    reference?: string | null

    @Field((type) => String, { nullable: true })
    currency?: string | null

    @Field((type) => String, { nullable: true })
    amount?: string | null

    @Field((type) => String, { nullable: true })
    status?: string | null

    @Field((type) => Date)
    transactionDate: Date;
    
    @Field((type) => Date)
    createdAt: Date;

    @Field((type) => Date)
    updatedAt: Date;
}