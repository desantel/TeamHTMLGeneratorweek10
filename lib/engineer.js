const Employee = require('./employee');

class engineer extends Employee {
    constructor(name, id, email, userName) {
        super(name, id, email, userName);

        this.role = 'Engineer'
    }

    getUserName() {
        return this.userName;
    }

    getRole() {
        return this.role;
    }
    
};

module.exports = engineer