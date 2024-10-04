import { Controller, Get, Param } from '@nestjs/common'
import { products, type Product } from 'src/core'
import type { ProductPrisma } from './product.prisma'

@Controller('products')
export class ProductController {
  // constructor(readonly repo: ProductPrisma) {}

  @Get()
  async getProducts(): Promise<Product[]> {
    // return this.repo.getProducts()
    return products.map(product => ({
      ...product,
      specifications: {
        highlightedSpecification:
          product.specifications.highlightedSpecification,
      },
    }))
  }

  @Get(':id')
  async gerProductById(@Param('id') id: string): Promise<Product | null> {
    // return this.repo.getProductById(Number(id))
    const product = products.find(product => product.id === Number(id))
    return product ?? null
  }
}
