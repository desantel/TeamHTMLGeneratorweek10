const Employee = require('./employee');

class intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email, school);

        this.role = 'Intern'
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return this.role;
    }
};

module.exports = intern