"use strict";
exports.__esModule = true;
exports.EmployeeRepository = void 0;
var EmployeeRepository = /** @class */ (function () {
    function EmployeeRepository() {
    }
    EmployeeRepository.prototype.saveData = function (employee) {
        // In real world you should separate in repository db
        // If in FE like for HTTP Request
        //  If in BE saving to DB SQL
        console.log(employee, "Save TO DB");
    };
    return EmployeeRepository;
}());
exports.EmployeeRepository = EmployeeRepository;
