const {test, expect} = require('@jest/globals');
const Employee = require('../lib/employee');

test ('creates an Employee object', () => {
    const data = {
        name: 'Maria',
        id: 123456,
        email:'maria123456@email.com',
        officeNumber: 777555333
    };

    const employee = new Employee(data);

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.officeNumber).toEqual(expect.any(String));
});

test ('gets Employee name', () => {
    const data = {
        name: 'Maria',
        id: 123456,
        email:'maria123456@email.com',
        officeNumber: 777555333
    };

    const employee = new Employee(data);

    expect(employee.name).toBe('Maria');
});

test ('gets Employee id', () => {
    const data = {
        name: 'Maria',
        id: 123456,
        email:'maria123456@email.com',
        officeNumber: 777555333
    };

    const employee = new Employee(data);

    expect(employee.id).toBe(123456);
});

test ('gets Employee email', () => {
    const data = {
        name: 'Maria',
        id: 123456,
        email:'maria123456@email.com',
        officeNumber: 777555333
    };

    const employee = new Employee(data);

    expect(employee.email).toBe('maria123456@email.com');
});

test ('gets Employee role', () => {
    const data = {
        name: 'Maria',
        id: 123456,
        email:'maria123456@email.com',
        officeNumber: 777555333
    };

    const employee = new Employee(data);

    expect(employee.role).toBe('Employee');
});

