class Employee {
    constructor(data) {
        const {name, id, email, officeNumber, userName, school} = data;

        this.name = name;
        this.id = id;
        this.email = email;
        this.role = 'Employee';
        this.officeNumber = officeNumber;
        this.userName = userName;
        this.school = school;
    }

    getName() {
        return this.name;
    }

    gitId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return this.role;
    }
};

module.exports = Employee