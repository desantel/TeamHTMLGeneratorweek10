const inquirer = require('inquirer');
const fs = require('fs');

const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const generateMarkdown = require('./src/generateMarkdown');
const writeFile = require('./src/webPage');

const employees = [];



const promptManage = [
        {
            type: "input",
            message: "What is the Manager's name?",
            name: "name",
            validate: (value) => { if (value) { return true } else { return "Please enter value" } },
        },
        {
            type: "input",
            message: "What is the Manager's employee id?",
            name: "id",
            validate: (value) => { if (value) { return true } else { return "Please enter value" } },
        },
        {
            type: "input",
            message: "What is the Manager's email?",
            name: "email",
            validate: (value) => { if (value) { return true } else { return "Please enter value" } },
        },
        {
            type: "input",
            message: "What is the Manager's office number?",
            name: "officeNumber",
            validate: (value) => { if (value) { return true } else { return "Please enter value" } },
        },
    ]

const addEmployee = () => {
    return inquirer.prompt([
        {
            type: 'list',
            message: "What would you like to do next?",
            name: "catagory",
            choices: [
                'Add an engineer',
                'Add an intern',
                'No more employees to add'
            ]
        }
    ])
        .then(data => {
            switch (data.catagory) {
                case 'Add an engineer':
                    promptEngineer();
                    break;
                case 'Add an intern':
                    promptIntern();
                    break;
                case 'No more employees to add':
                    const Html = generateMarkdown(employees)
                    writeFile(Html);
                    break;
            }
        })
}

const promptEngineer = () => {
    return inquirer.prompt([
        {
            type: "input",
            message: "What is the Engineer's name?",
            name: "name",
            validate: (value) => { if (value) { return true } else { return "Please enter value" } },
        },
        {
            type: "input",
            message: "What is the Engineer's employee id?",
            name: "id",
            validate: (value) => { if (value) { return true } else { return "Please enter value" } },
        },
        {
            type: "input",
            message: "What is the Engineer's email?",
            name: "email",
            validate: (value) => { if (value) { return true } else { return "Please enter value" } },
        },
        {
            type: "input",
            message: "What is the Engineer's Github username?",
            name: "userName",
            validate: (value) => { if (value) { return true } else { return "Please enter value" } },
        },
    ])
    .then(data => {
        const team = new Engineer(data);
        console.log(data);
        console.log(team.role);
        employees.push(team);
        console.log(employees);
        addEmployee();
    })
};

const promptIntern = () => {
    return inquirer.prompt([
        {
            type: "input",
            message: "What is the Intern's name?",
            name: "name",
            validate: (value) => { if (value) { return true } else { return "Please enter value" } },
        },
        {
            type: "input",
            message: "What is the Intern's employee id?",
            name: "id",
            validate: (value) => { if (value) { return true } else { return "Please enter value" } },
        },
        {
            type: "input",
            message: "What is the Intern's email?",
            name: "email",
            validate: (value) => { if (value) { return true } else { return "Please enter value" } },
        },
        {
            type: "input",
            message: "What is the Intern's school name?",
            name: "school",
            validate: (value) => { if (value) { return true } else { return "Please enter value" } },
        },
    ])
    .then(data => {
        const team = new Intern(data);
        console.log(data);
        console.log(team.role);
        employees.push(team);
        console.log(employees);
        addEmployee();
    })
}

const init = () => {
    return inquirer.prompt(promptManage);
};

init()
    .then(data => {
        return new Manager(data);
    })
    .then(data => {
        const newManager = data;
        console.log(data);
        employees.push(newManager);
        console.log(employees);
    })
    .then(addEmployee)
    .catch(err => {
        console.log(err);
    })
