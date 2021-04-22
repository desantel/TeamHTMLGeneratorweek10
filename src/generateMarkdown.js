const inquirer = require('inquirer');

function generateMarkdown(data) {
    return ` <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <title>Weather</title>
        <script src="https://code.jquery.com/jquery-3.5.1.min.js"
            integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
    </head>
    
    <body>
        <header class="jumbotron jumbotron-fluid" id="header">
            <div class="container" id="header">
                <h1>Team Members</h1>
            </div>
        </header>
        <div class="container">
            <main class="row">
                <div class="col-3" id="manager">Manager</div>
                <div class="col-3" id="engineer">Engineer</div>
                <div class="col-3" id="employee">Employee</div>
                <div class="col-3" id="intern">Intern</div>
            </main>
        </div>
    </body>
    
    </html>
    `
}

module.exports = generateMarkdown;