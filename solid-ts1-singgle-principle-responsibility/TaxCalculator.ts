import { Employee } from ".";

export class TaxCalculator {
  public calculateTaxes(employee: Employee) {
    if (employee.getEmployeeType() == "fulltime") {
      return (Number(employee.getEmployeeSalary()) * 10) / 100;
    } else {
      return (Number(employee.getEmployeeSalary()) * 5) / 100;
    }
  }
}
