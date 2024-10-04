import { Body, Controller, Get, Param, Post } from '@nestjs/common'
import { products, type Product } from 'src/core'
// biome-ignore lint/style/useImportType: <explanation>
import { ProductPrisma } from './product.prisma'

@Controller('products')
export class ProductController {
  constructor(readonly repo: ProductPrisma) {}

  @Post()
  async saveProduct(@Body() product: Product): Promise<void> {
    return this.repo.save(product)
  }

  @Get()
  async getProducts(): Promise<Product[]> {
    return this.repo.getProducts()
    // return products.map(product => ({
    //   ...product,
    //   specifications: {
    //     highlightedSpecification:
    //       product.specifications.highlightedSpecification,
    //   },
    // }))
  }

  @Get(':id')
  async gerProductById(@Param('id') id: string): Promise<Product | null> {
    return this.repo.getProductById(Number(id))
    // const product = products.find(product => product.id === Number(id))
    // return product ?? null
  }
}
