import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { PrismaService } from './prisma.service';
import { join } from 'path';
import { TransactionsModule } from './modules/transactions/transactions.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      buildSchemaOptions: { dateScalarMode: 'timestamp' },
    }),
    TransactionsModule,
  ],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
