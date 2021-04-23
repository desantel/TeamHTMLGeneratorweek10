const employeesList = (employees) => {
    const employeesList = [];
    for (let i = 0; i < employees.length; i++) {
        let employee =
            `<div class ='col-4'>
        <div class = 'card'>
        <div class = 'card-header bg-info text-gray fw-bold'>
        <h4 class = 'fw-bold'>${employees[i].name}</h4>
        <h5><span>`
        if (employees[i].getRole() === "Manager") {
            employee += `<i></i></span> ${employees[i].role}
            `
        } else if (employees[i].getRole() === "Engineer") {
            employee += `<i></i></span> ${employees[i].role}
            `
        } else {
            employee += `<i></i></span> ${employees[i].role}
            `
        }

        employee +=
            `</h5>
        </div>
        <div class='card-body bg-light'>
        <ul class = 'list-group'>
            <li class = 'list-group-item'>Employee ID:${employees[i].id}</li>
            <li class = 'list-group-item'>Email:<a href = 'mailto:${employees[i].email}'>${employees[i].email}</a></li>`

        if (employees[i].officeNumber) {
            employee += `<li class = 'list-group-item'>Office Number:${employees[i].officeNumber}</li>`
        }
        if (employees[i].userName) {
            employee += `<li class = 'list-group-item'>GitHub:<a href = 'https://github.com/${employees[i].userName}'>${employees[i].userName}</a></li>`
        }
        if (employees[i].school) {
            employee += `<li class = 'list-group-item'>Intern School:${employees[i].school}</li>`
        }

        employee += 
            `</ul>
            </div>
            </div>
            </div>`

            employeesList.push(employee);
    }
    return employeesList.join('');
};

module.exports = employees => {
    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <title>Team Generator</title>
        <link rel="stylesheet" href="../dist/styleIndex.css">
        <script src="https://code.jquery.com/jquery-3.5.1.min.js"
            integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
    </head>
    
    <body>
        <header class="jumbotron jumbotron-fluid" id="header">
            <div class="container">
                <h1>Team Members</h1>
            </div>
        </header>
        <div class="container">
            <main class="row">
                ${employeesList(employees)}
            </main>
        </div>
    </body>
    
    </html>`
}