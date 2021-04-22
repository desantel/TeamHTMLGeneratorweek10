const Employee = require('./employee');

class engineer extends Employee {
    constructor(name, id, email, username) {
        super(name, id, email, username);

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