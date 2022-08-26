import { ProductFactory } from "./ProductFactory";


export class ProductCatalog {

  public getAllListsProducts() {
    const productRepository = ProductFactory.create()
    return productRepository.getAllProductsName()
  }
}
