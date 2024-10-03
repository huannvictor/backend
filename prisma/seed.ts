import { PrismaClient } from '@prisma/client'
import { products } from '../src/core'

const prisma = new PrismaClient()

async function seed() {
  await prisma.product.createMany({
    data: products.map(product => ({
      ...product,
      id: undefined,
    })),
  })
}

seed()
