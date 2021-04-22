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
