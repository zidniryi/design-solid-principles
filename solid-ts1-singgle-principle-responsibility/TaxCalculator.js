"use strict";
exports.__esModule = true;
exports.TaxCalculator = void 0;
var TaxCalculator = /** @class */ (function () {
    function TaxCalculator() {
    }
    TaxCalculator.prototype.calculateTaxes = function (employee) {
        if (employee.getEmployeeType() == "fulltime") {
            return (Number(employee.getEmployeeSalary()) * 10) / 100;
        }
        else {
            return (Number(employee.getEmployeeSalary()) * 5) / 100;
        }
    };
    return TaxCalculator;
}());
exports.TaxCalculator = TaxCalculator;
