export class Product {
  // Initial discount product
  protected discount: number = 20
  // The general discount product
  public getDiscount(): number {
    return Number(this.discount)
  }
}