import { IPrint } from "./IPrint";

export class CanonPrinter implements IPrint {
  print(): void {
    // Real world code should here
    // For sample we just print here
    console.log('Method not implemented. Print');
  }

  getPrintSpoolDetail(): void {
    // Real world code should here
    // For sample we just print here
    console.log('Method not implemented. Print Detail');
  }
}