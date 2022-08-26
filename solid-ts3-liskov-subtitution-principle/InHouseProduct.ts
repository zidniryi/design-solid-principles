import { Product } from "./Product";

export class InHouseProduct extends Product {

  // Override the discount inheritence 
  override getDiscount() {
    this.applyDiscount()
    return this.discount
  }

  // Method if inhouse product
  public applyDiscount() {
    return this.discount = this.discount * 1.5;
  }
}