import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log(`Start seeding ...`)
  const transactions = await prisma.$executeRaw(
    Prisma.sql`COPY public."Transactions"(id, account, description, category, reference, currency, amount, status, "transactionDate", "createdAt", "updatedAt") FROM '/prisma/Transactions.csv' with null as E'\'\'' DELIMITER ',' CSV HEADER;`
  );
  console.log(transactions);
  console.log(`Seeding finished.`)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
