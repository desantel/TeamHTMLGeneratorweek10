const Employee = require('./employee');

class manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email, officeNumber);

        this.role = 'Manager';
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return this.role;
    }
};

module.exports = manager