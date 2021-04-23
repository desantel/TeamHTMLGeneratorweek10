const Engineer = require('../lib/engineer');

test ('gets GitHub username', () => {
    const data = {
        name: 'Maria',
        id: 123456,
        email:'maria123456@email.com',
        userName: 'maria'
    };

    const engineer = new Engineer(data);

    expect(engineer.userName).toBe('maria');
});

test ('gets role', () => {
    const data = {
        name: 'Maria',
        id: 123456,
        email:'maria123456@email.com',
        userName: 'maria'
    };

    const engineer = new Engineer(data);

    expect(engineer.role).toBe('Engineer');
});
