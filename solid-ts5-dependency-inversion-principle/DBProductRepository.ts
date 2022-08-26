import { ProductRepository } from "./ProductRepository"

export class DBProductRepository implements ProductRepository {

  public getAllProductsName() {
    const dataList = ["soap", "shampo"]
    return dataList
  }

}