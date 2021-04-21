const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require('./Assets/generateMarkdown');

const writeFileAsync = util.promisify(fs.writeFile);
const promptQuestion = () => {
    return inquirer.prompt([
        {
            type: 'list',
            message: "What is the work category?",
            name: "catagory",
            choice: [
                'Manger',
                'Engineer',
                'Employee',
                'Intern',
                'No more employees to add'
            ]
        }
    ])
}

const promptManage = () => {
    return inquirer.prompt([
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
    ])
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
            name: "gitHub",
            validate: (value) => { if (value) { return true } else { return "Please enter value" } },
        },
    ])
}

const promptEmployee = () => {
    return inquirer.prompt([
        {
            type: "input",
            message: "What is the Employee's name?",
            name: "name",
            validate: (value) => { if (value) { return true } else { return "Please enter value" } },
        },
        {
            type: "input",
            message: "What is the Employee's employee id?",
            name: "id",
            validate: (value) => { if (value) { return true } else { return "Please enter value" } },
        },
        {
            type: "input",
            message: "What is the Employee's email?",
            name: "email",
            validate: (value) => { if (value) { return true } else { return "Please enter value" } },
        },
    ])
}

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
            name: "schoolName",
            validate: (value) => { if (value) { return true } else { return "Please enter value" } },
        },
    ])
}
