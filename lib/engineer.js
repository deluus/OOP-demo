const Employee = require("./employee");

class Engineer extends Employee {


}
function askForManagerInfor (){

  // prompt the user for the data
  inquirer
  .prompt(questions)
  .then((answers ) => {
    // then  creat and store an  opbject for the manager
    employee.push(new Manager( answer.managerName, answer.managerId, answer.managerEmail, answer.managerOfficeNumber) );

    // then "ask what they would like to do next "
    askForNextAction ();


  })

}

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your name?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'What is your Employee ID?',
      name: 'motivation',
    },
    {
      type: 'input',
      message: 'What is your emial address?',
      name: 'project',
    },
    {
        type: 'input',
        message: 'What is you office number?',
        name: 'solve',
      },
  ])


module.exports = Engineer