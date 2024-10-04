import { Injectable } from '@nestjs/common'
// biome-ignore lint/style/useImportType: <explanation>
import { PrismaProvider } from 'src/db/prisma.provider'
import type { Product } from 'src/core'

@Injectable()
export class ProductPrisma {
  constructor(readonly prisma: PrismaProvider) {}

  async save(product: Product): Promise<void> {
    await this.prisma.product.upsert({
      where: { id: product.id ?? -1 },
      update: product,
      create: product,
    })
  }

  async getProducts(): Promise<Product[]> {
    return this.prisma.product.findMany() as any
  }

  async getProductById(id: number): Promise<Product | null> {
    const product = await this.prisma.product.findUnique({ where: { id } })
    return (product as any) ?? null
  }

  async delete(id: number): Promise<void> {
    await this.prisma.product.delete({ where: { id } })
  }
}
