# Design SOLID Principles

## Question

Before we do something it's good we make a question to ourselves, the possibility of something we will do.

### What is SOLID Principles?

The SOLID Principles are five principles of Object-Oriented class design. They are a set of rules and best practices to follow while designing a class structure.

### Who should implement SOLID Principles?

Every programmer/engineer who jumps into a project for the efficiency and effectiveness of the team in doing the project well

### When we should implement SOLID Principles?

Every time we write our code, whether it's creating new features, improvements or enhancements, we must pay attention to aspects of the SOLID Principles.

### Why whe used SOLID Principles?

Because by using SOLID Principles we will create a code that is clean, easy to read, maintain, and has effectiveness and efficiency and will save time and effort for us as programmers or engineers and will save money for our company.

Other benefits is the goal of the SOLID principles is to reduce dependencies so that we can change one area of software without impacting others. Additionally, they're intended to make designs easier to understand, maintain, and extend.

### How we implement SOLID Principles?

To implement the SOLID Principles everything starts from habit and when we do it often it will be automatically programmed in us, and how, will be explained and given an example of the SOLID Principles project in this repo.

## Concepts of SOLID principles

### 1. Single-Responsibility Principle

Single-responsibility Principle (SRP) states:

A class should have one and only one reason to change, meaning that a class should have only one job.

**Examples**

```typescript
export class EmployeeRepository {
  public saveData(employee: Employee) {
    // In real world you should separate in repository db
    // If in FE like for HTTP Request
    //  If in BE saving to DB SQL
    console.log(employee, "Save TO DB");
  }
}
```

```typescript
export class TaxCalculator {
  public calculateTaxes(employee: Employee) {
    if (employee.getEmployeeType() == "fulltime") {
      return (Number(employee.getEmployeeSalary()) * 10) / 100;
    } else {
      return (Number(employee.getEmployeeSalary()) * 5) / 100;
    }
  }
}
```

**Explanation**
We separate the saveData method into EmployeeRepository and we also separate the TaxCalculator cohesion with what the method or class does with only one responsibility.

### 2. Open-Closed Principle

Open-closed Principle (OCP) states:

Objects or entities should be open for extension but closed for modification.

This means that a class should be extendable without modifying the class itself.

**Examples**

```typescript
// This is Closed class we should modify this class
// Just imagine like laptop you can add accesory like headphone, speaker, external keyboard but you can't allow to modify the processor
export class InsuerencePremiumCalculator {
  public premiumUserCalculator(customer: CustomerProfile) {
    if (customer.isLoyalCustomer()) {
      return 20;
    }
    return 0;
  }
}
```

```typescript
//  The intrefcae or extentions we used for bridge the Closed class with Open Extention class
export interface CustomerProfile {
  isLoyalCustomer(): boolean;
}
```

**Explanation**
We create interfaces for all Users, so when a new User Type is added we don't need to change the source class library that we have.

### 3. Liskov Substitution Principle

The Liskov Substitution Principle (LSP) states that objects of a superclass should be replaceable with objects of its subclasses without breaking the application.

**Examples**

```typescript
export class Product {
  // Initial discount product
  protected discount: number = 20;
  // The general discount product
  public getDiscount(): number {
    return Number(this.discount);
  }
}
```

```typescript
export class InHouseProduct extends Product {
  // Override the discount inheritence
  override getDiscount() {
    this.applyDiscount();
    return this.discount;
  }

  // Method if inhouse product
  public applyDiscount() {
    return (this.discount = this.discount * 1.5);
  }
}
```

```typescript
import { PricingUtils } from "./PricingUtils";

const pricingUtils = new PricingUtils();

console.log(pricingUtils.getMappingDiscount());

/**
 * LISKOV need working code and correctness code
 * Subtitution should
 * Breaking the hierarchy
 * Not Ask, Tell
 */
```

**Explanation**
We override the get Discount method in the InHouse Product class to provide a different discount so that when we mapped it or called the method we created it doesn't break.

### 4. Interface Segregation Principle

Interface Segregation Principle
Interface segregation principle states:

A client should never be forced to implement an interface that it doesn’t use, or clients shouldn’t be forced to depend on methods they do not use.

**Examples**

```typescript
import { IFax } from "./IFax";
import { IPrint } from "./IPrint";
import { IScan } from "./IScan";

export class XeroxMainCenter implements IPrint, IScan, IFax {
  print(): void {
    // Real world code should here
    // For sample we just print here
    console.log("Method not implemented. Print");
  }

  getPrintSpoolDetail(): void {
    // Real world code should here
    // For sample we just print here
    console.log("Method not implemented. Print Detail");
  }

  scan(): void {
    // Real world code should here
    // For sample we just print here
    console.log("Method not implemented. Scan");
  }

  scanPhoto(): void {
    // Real world code should here
    // For sample we just print here
    console.log("Method not implemented. Scan Photo");
  }

  fax(): void {
    // Real world code should here
    // For sample we just print here
    console.log("Method not implemented. Fax");
  }

  faxInternet(): void {
    // Real world code should here
    // For sample we just print here
    console.log("Method not implemented. Fax With Internet");
  }
}
```

```typescript
import { IPrint } from "./IPrint";

export class CanonPrinter implements IPrint {
  print(): void {
    // Real world code should here
    // For sample we just print here
    console.log("Method not implemented. Print");
  }

  getPrintSpoolDetail(): void {
    // Real world code should here
    // For sample we just print here
    console.log("Method not implemented. Print Detail");
  }
}
```

**Explanation**
We make the interface according to our needs, we can see that we implement IPrint, IScan, IFax Interfaces in the XeroxMainCenter class and we implement 1 IPrint Interface class in the CanonPrinter class because CanonPrinter can only and requires 1 class that needs to be implemented.

### 5. Dependency Inversion Principle

Entities must depend on abstractions, not on concretions. It states that the high-level module must not depend on the low-level module, but they should depend on abstractions. This principle allows for decoupling.

**Examples**

```typescript
export class DBProductRepository implements ProductRepository {
  public getAllProductsName() {
    const dataList = ["soap", "shampo"];
    return dataList;
  }
}
```

```typescript
export interface ProductRepository {
  getAllProductsName(): Array<string>;
}
```

```typescript
export class ProductFactory {
  [x: string]: any;

  public static create(): ProductFactory {
    return new DBProductRepository();
  }
}
```

**Explanation**
From the code above we can see that the DBProductRepository depends on the abstract Interface of the ProductRepository class which is then rewritten in the ProductFactory class so that it can be called ProductCatalog so it depends on abstractions.
