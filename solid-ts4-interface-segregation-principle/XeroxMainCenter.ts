import { IFax } from "./IFax";
import { IPrint } from "./IPrint";
import { IScan } from "./IScan";

export class XeroxMainCenter implements IPrint, IScan, IFax {

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

  scan(): void {
    // Real world code should here
    // For sample we just print here
    console.log('Method not implemented. Scan');
  }

  scanPhoto(): void {
    // Real world code should here
    // For sample we just print here
    console.log('Method not implemented. Scan Photo');
  }

  fax(): void {
    // Real world code should here
    // For sample we just print here
    console.log('Method not implemented. Fax');
  }

  faxInternet(): void {
    // Real world code should here
    // For sample we just print here
    console.log('Method not implemented. Fax With Internet');
  }

}