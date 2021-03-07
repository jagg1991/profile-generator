const Employee = require("./employee");

class Manager extends Employee {
    constructor(name, id, email, office) {
        super(name, id, email)
        this.officeNumber = office;
    }

    getOffice() {
        return this.officeNumber
    }

    getRole() {
        return "Manager"
    }
}
module.exports = Manager;