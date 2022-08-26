import { InHouseProduct } from "./InHouseProduct";
import { Product } from "./Product";

export class PricingUtils {
  // Create 3 instance object
  p1 = new Product()
  p2 = new Product()
  p3 = new InHouseProduct()

  // Init array product
  productList: Array<Product> = []

  constructor() {
    this.productList.push(this.p1)
    this.productList.push(this.p2)
    this.productList.push(this.p3)
    this.getMappingDiscount()
  }

  // Mapping the data
  getMappingDiscount() {
    return this.productList.map(itemProduct => {
      return itemProduct.getDiscount()
    })
  }
}