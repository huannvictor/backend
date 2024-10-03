import { Controller, Get, Param } from '@nestjs/common'
import { type Product, products } from 'src/core'

@Controller('products')
export class ProductController {
  @Get()
  async getProducts(): Promise<Product[]> {
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
    const product = products.find(product => product.id === +id)
    return product ?? null
  }
}
