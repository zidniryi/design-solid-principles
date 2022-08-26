"use strict";
exports.__esModule = true;
exports.Employee = void 0;
var EmployeeRepository_1 = require("./EmployeeRepository");
var TaxCalculator_1 = require("./TaxCalculator");
var Employee = /** @class */ (function () {
    function Employee() {
        this.setEmployeeId();
        this.setEmployeeName();
        this.setEmployeeAddress();
        this.setEmployeeType();
        this.setEmployeeNumber();
        this.setEmployeeSallary();
    }
    // Decouple in repository class (Coupling)
    Employee.prototype.saveEmployeeData = function () {
        var employeeRepository = new EmployeeRepository_1.EmployeeRepository();
        return employeeRepository.saveData(this);
    };
    // Decouple in Tax Calculator Class (Cohesion)
    Employee.prototype.calculateTaxEmployee = function () {
        return new TaxCalculator_1.TaxCalculator().calculateTaxes(this);
    };
    // For GET and SET it's not neceserry to create own class
    Employee.prototype.getEmployeeId = function () {
        return this.employeeId;
    };
    Employee.prototype.setEmployeeId = function () {
        return this.employeeId = "11";
    };
    Employee.prototype.getEmployeeName = function () {
        return this.employeeName;
    };
    Employee.prototype.setEmployeeName = function () {
        return this.employeeName = "John Doe";
    };
    Employee.prototype.getEmployeeAdress = function () {
        return this.employeeAddress;
    };
    Employee.prototype.setEmployeeAddress = function () {
        return this.employeeAddress = "Jakarta";
    };
    Employee.prototype.getEmployeeType = function () {
        return this.employeeType;
    };
    Employee.prototype.setEmployeeType = function () {
        return this.employeeType = "fulltime";
    };
    Employee.prototype.getEmployeeNumber = function () {
        return this.employeeNumber;
    };
    Employee.prototype.setEmployeeNumber = function () {
        return this.employeeNumber = 123455;
    };
    Employee.prototype.getEmployeeSalary = function () {
        return this.employeeSalary;
    };
    Employee.prototype.setEmployeeSallary = function () {
        return this.employeeSalary = 200000;
    };
    return Employee;
}());
exports.Employee = Employee;
var employee = new Employee();
console.log(employee.calculateTaxEmployee());
employee.saveEmployeeData();
