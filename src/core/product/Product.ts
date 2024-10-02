import type Priceable from './Priceable'
import type Specifications from './Specifications'

export default interface Product extends Priceable {
  id: number
  name: string
  description: string
  brand: string
  model: string
  image: string
  videoReview: string
  rate: number
  tags: string[]
  specifications: Specifications
}
