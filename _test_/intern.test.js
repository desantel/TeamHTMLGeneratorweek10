const {test, expect} = require('@jest/globals');
const Intern = require('../lib/intern');

test ('gets GitHub username', () => {
    const data = {
        name: 'Maria',
        id: 123456,
        email:'maria123456@email.com',
        school: 'wcu'
    };

    const intern = new Intern(data);

    expect(intern.school).toBe('wcu');
});

test ('gets role', () => {
    const data = {
        name: 'Maria',
        id: 123456,
        email:'maria123456@email.com',
        school: 'wcu'
    };

    const intern = new Intern(data);

    expect(intern.role).toBe('Intern');
});
