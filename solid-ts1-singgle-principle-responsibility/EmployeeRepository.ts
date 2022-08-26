import { Employee } from ".";

export class EmployeeRepository {
  public saveData(employee: Employee) {
    // In real world you should separate in repository db
    // If in FE like for HTTP Request
    //  If in BE saving to DB SQL
    // Log for run in index.ts
    console.log(employee, "Save TO DB");
  }
}
