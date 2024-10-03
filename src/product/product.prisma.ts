import { Injectable } from '@nestjs/common'
import type { Product } from 'src/core'
import type { PrismaProvider } from 'src/db/prisma.provider'

@Injectable()
export class ProductPrisma {
  constructor(readonly prisma: PrismaProvider) {}

  async getProducts(): Promise<Product[]> {
    return this.prisma.product.findMany() as any
  }

  async getProductById(id: number): Promise<Product | null> {
    const product = await this.prisma.product.findUnique({ where: { id } })
    return (product as any) ?? null
  }
}
