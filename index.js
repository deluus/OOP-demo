const inquirer = require('inquirer');
const fs = require('fs');
const manager = require ('./lib/manager');
const engineer = require('./lib/engineer')

const employee = [];

// actions needed - all seperate fxn

// ask them for manager info

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

  .then((answers) => {

    const { firstName , id , email, officeNumber} = answers

    const manager = 
  

  fs.writeFile( 
    'index.html', teamTemplate,(answers),
 (err) => {
 err ? console.error(err) : console.log('Generating HTML...');
 } )

  });
