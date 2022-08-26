import { EmployeeRepository } from "./EmployeeRepository"
import { TaxCalculator } from "./TaxCalculator"

export class Employee {
  private employeeId?: string
  private employeeName?: string
  private employeeAddress?: string
  private employeeType?: string
  private employeeNumber?: number
  private employeeSalary?: number

  constructor() {
    this.setEmployeeId()
    this.setEmployeeName()
    this.setEmployeeAddress()
    this.setEmployeeType()
    this.setEmployeeNumber()
    this.setEmployeeSallary()
  }

  // Decouple in repository class (Coupling)
  public saveEmployeeData() {
    const employeeRepository = new EmployeeRepository();
    return employeeRepository.saveData(this);
  }

  // Decouple in Tax Calculator Class (Cohesion)
  public calculateTaxEmployee() {
    return new TaxCalculator().calculateTaxes(this);
  }

  // For GET and SET it's not neceserry to create own class
  public getEmployeeId() {
    return this.employeeId
  }

  private setEmployeeId() {
    return this.employeeId = "11"
  }

  public getEmployeeName() {
    return this.employeeName
  }

  public setEmployeeName() {
    return this.employeeName = "John Doe"
  }

  public getEmployeeAdress() {
    return this.employeeAddress

  }

  public setEmployeeAddress() {
    return this.employeeAddress = "Jakarta"
  }

  public getEmployeeType() {
    return this.employeeType;

  }

  public setEmployeeType() {
    return this.employeeType = "fulltime"
  }

  public getEmployeeNumber() {
    return this.employeeNumber
  }

  public setEmployeeNumber() {
    return this.employeeNumber = 123455
  }

  public getEmployeeSalary() {
    return this.employeeSalary
  }

  public setEmployeeSallary() {
    return this.employeeSalary = 200000
  }
}

const employee = new Employee()
console.log(employee.calculateTaxEmployee())
employee.saveEmployeeData()