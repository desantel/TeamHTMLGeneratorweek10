const Manager = require('../lib/manager');


test ('gets Employee office number', () => {
    const data = {
        name: 'Maria',
        id: 123456,
        email:'maria123456@email.com',
        officeNumber: '777555333'
    };

    const manager = new Manager(data);

    expect(manager.officeNumber).toBe('777555333');
});


test ('gets role', () => {
    const data = {
        name: 'Maria',
        id: 123456,
        email:'maria123456@email.com',
        officeNumber: '777555333'
    };

    const manager = new Manager(data);

    expect(manager.role).toBe('Manager');
});
