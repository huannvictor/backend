import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { ProductModule } from './product/product.module'
import { DbModule } from './db/db.module'

@Module({
  imports: [ProductModule, DbModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
