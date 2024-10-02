import { Controller, Get } from '@nestjs/common'
import { type Product, products } from 'src/core'

@Controller('products')
export class ProductController {
  @Get()
  getProducts(): Product[] {
    return products.map(product => ({
      ...product,
      specifications: {
        highlightedSpecification:
          product.specifications.highlightedSpecification,
      },
    }))
  }
}
