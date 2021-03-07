const Employee = require("./employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email)
        this.schoolName = school;
    }


    getRole() {
        return "Intern"
    }
    getSchool() {
        return this.schoolName
    }
};

module.exports = Intern;