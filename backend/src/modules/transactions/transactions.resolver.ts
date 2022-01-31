import { Args, Context, Query, Resolver } from "@nestjs/graphql";
import { PrismaService } from "src/prisma.service";
import { Transactions } from "./transactions.model";

@Resolver(of => Transactions)
export class TransactionResolver {
    constructor(private prisma: PrismaService) {}
    
    @Query(returns => [Transactions], { nullable: true})
    async getAllTransactions() {
        return await this.prisma.transactions.findMany();
    }

    @Query(returns => Transactions)
    async getTransaction(@Args('id', { type: () => String }) id: string) {
        return await this.prisma.transactions.findUnique({ where: { id }})
    }
}