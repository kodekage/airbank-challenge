import { Module } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";
import { TransactionResolver } from "./transactions.resolver";

@Module({
    providers: [TransactionResolver, PrismaService],
  })
  export class TransactionsModule {}
  