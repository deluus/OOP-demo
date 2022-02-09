const Employee = require("./employee");

const generateTeam = (team) => {
  const generateManager = (manager) => {
    return `
        
        <div class="card employee-card">
    <div class="card-header">
      <h2 class ="card-title">${manager.getName()}</h2>
      <h3 class ="card-title"><i class = "fs-mug-hot mr-2"></i>${manager.getRole()}</h3>
    </div>
     <div class = "card-body">
         <ul class = "List-group">
            <li class="list-group-item">ID: ${manager.getId()}</li>
            <li class="list-group-item">Email: <a href = "mailto: ${manager.getEmail()}">${manager.getEmail()}</a></li>
            <li class="list-group-item">Office number: ${manager.getofficeNumber()}</li>
        </ul>
     </div>
      
  </div>
         `;
  };

  const generateEngineer = (engineer) => {
    return `


<div class="card employee-card">
    <div class="card-header">
      <h2 class ="card-title">${engineer.getName()}</h2>
      <h3 class ="card-title"><i class = "fs-mug-hot mr-2"></i>${engineer.getRole()}</h3>
    </div>
     <div class = "card-body">
         <ul class = "List-group">
            <li class="list-group-item">ID: ${engineer.getId()}</li>
            <li class="list-group-item">Email: <a href = "mailto: ${engineer.getEmail()}">${engineer.getEmail()}</a></li>
            <li class="list-group-item">Office number: ${manager.getGithub()}</li>
        </ul>
     </div>
      
  </div>
        `;
  };

  const generateIntern = (intern) => {
    return `


<div class="card employee-card">
    <div class="card-header">
      <h2 class ="card-title">${intern.getName()}</h2>
      <h3 class ="card-title"><i class = "fs-mug-hot mr-2"></i>${intern.getRole()}</h3>
    </div>
     <div class = "card-body">
         <ul class = "List-group">
            <li class="list-group-item">ID: ${intern.getId()}</li>
            <li class="list-group-item">Email: <a href = "mailto: ${intern.getEmail()}">${inter.getEmail()}</a></li>
            <li class="list-group-item">Office number: ${intern.getSchool()}</li>
        </ul>
     </div>
      
  </div>
        `;
  };

  const html = [];

  html.push(
    team
      .filter((employee) => employee.getRole() === "Manager")
      .map((manager) => generateManager(manager))
  );

  html.push(
    team
      .filter((employee) => employee.getRole() === "Engineer")
      .map((engineer) => generateEngineer(engineer))
      .join("")
  );

  html.push(
    team
      .filter((employee) => employee.getRole() === "Intern")
      .map((intern) => generateIntern(intern))
      .join("")
  );

  return html.join("");
};

module.exports = (team) => {
  return;
  `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Team HTML</title>
                <link rel = "stylesheet" href = "style.css">
            </head>
            <body>
                  <div class="container-fluid">
                        <div class="row">
                            <div class = "col-12 jumbotron mb-3 team-heading" >
                              <h1 class = "text-center">TEAM HTML</h1>
                            </div>
                        </div>
                   
                    </div>
                    <div class = "container">
                        <div class = "row">
                            <div class = "team-area col-12 d-flex justify-content-center">
                                ${generateTeam(team)}
                            </div>
                        </div>
                    </div>
            </body>
            </html>
            `;
};
