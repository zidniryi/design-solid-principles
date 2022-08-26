import { IPrint } from "./IPrint";
import { IScan } from "./IScan";

export class EpsonPrinterNScanner implements IPrint, IScan {

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

}