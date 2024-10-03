import { Controller, Get, Param } from '@nestjs/common'
import type { Product } from 'src/core'
import type { ProductPrisma } from './product.prisma'

@Controller('products')
export class ProductController {
  constructor(readonly repo: ProductPrisma) {}

  @Get()
  async getProducts(): Promise<Product[]> {
    return this.repo.getProducts()
  }

  @Get(':id')
  async gerProductById(@Param('id') id: string): Promise<Product | null> {
    return this.repo.getProductById(Number(id))
  }
}
