import * as request from 'supertest';
import { BadRequestException, INestApplication } from '@nestjs/common'
import { Test, TestingModule } from '@nestjs/testing'
import { AppModule } from '../src/app.module'
import { PrismaService } from '../src/prisma.service';

const MockPrismaService = {
  transactions: {
    findMany: jest.fn(),
    findUnique: jest.fn()
  }
}

describe('Transactions Query', () => {
  let app: INestApplication

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
      providers: [PrismaService]
    })
    .overrideProvider(PrismaService)
    .useValue(MockPrismaService)
    .compile()

    app = moduleRef.createNestApplication()
    await app.init()
  })

  afterEach(async () => {
    jest.clearAllMocks()
    await app.close()
  })

  const gpl = '/graphql';

  describe('getAllTransactions', () => {
    it('should return all transactions in db', () => {
      return request(app.getHttpServer()).post(gpl).send({
        query: '{ getAllTransactions { id transactionDate category }}'
      }).expect(200)
    })
  })

  describe('getTransaction', () => {
    it('should return a transaction in db', () => {
      return request(app.getHttpServer()).post(gpl).send({
        query: '{ getTransaction(id: "e206619a-6dd2-4cc1-8603-429631d46476") { id account }}'
      }).expect(200)
    })

    it('should return Bad request if id dont match', () => {
      return request(app.getHttpServer()).post(gpl).send({
        query: '{ getTransaction() { id account }}'
      }).expect(400)
    })
  })

  describe('getTransactionsRange', () => {
    it('should return all transactions in db using date range', () => {
      return request(app.getHttpServer()).post(gpl).send({
        query: '{ getTransactionsRange(startDate: "2021-06-22 12:55:26", endDate: "2021-06-24 17:42:39") { id transactionDate category }}'
      }).expect(200)
    })

    it('should return Bad request if no date range is passed', () => {
      return request(app.getHttpServer()).post(gpl).send({
        query: '{ getTransactionsRange() { id account }}'
      }).expect(400)
    })
  })
})
