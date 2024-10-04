import { Injectable } from '@nestjs/common'
import type { Product } from 'src/core'
import type { PrismaProvider } from 'src/db/prisma.provider'

@Injectable()
export class ProductPrisma {
  constructor(readonly repo: PrismaProvider) {}

  async getProducts(): Promise<Product[]> {
    return this.repo.product.findMany() as any
  }

  async getProductById(id: number): Promise<Product | null> {
    const product = await this.repo.product.findUnique({ where: { id } })
    return (product as any) ?? null
  }
}
