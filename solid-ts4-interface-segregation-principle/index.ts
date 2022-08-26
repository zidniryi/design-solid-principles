import { CanonPrinter } from "./CanonPrinter";
import { EpsonPrinterNScanner } from "./EpsonPrinterNScanner";
import { XeroxMainCenter } from "./XeroxMainCenter";

/**
* Interface Segregation
* No method should force implement the method that is not use
* Decople and only implements that method we need and we use 
*/
const xeroxMainCenter = new XeroxMainCenter()
const epsonPrinterNScanner = new EpsonPrinterNScanner()
const canonPrinter = new CanonPrinter()

xeroxMainCenter.faxInternet()
epsonPrinterNScanner.scanPhoto()
canonPrinter.print()