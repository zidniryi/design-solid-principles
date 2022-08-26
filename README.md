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
