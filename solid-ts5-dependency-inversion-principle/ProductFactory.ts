import { DBProductRepository } from "./DBProductRepository";

export class ProductFactory {
  [x: string]: any;

  public static create(): ProductFactory {
    return new DBProductRepository()
  }
}