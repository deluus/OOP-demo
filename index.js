const inquirer = require('inquirer');
const fs = require('fs');
const employee = require ('./lib/employee')
const manager = require ('./lib/manager');
const engineer = require('./lib/engineer');
const intern = require ('./lib/intern');

const employee = [];

// actions needed - all seperate fxn

// ask them for manager info

function askForManagerInfo (){

  // prompt the user for the data
  inquirer
  .prompt([
  
      {
        type: 'input',
        message: 'What is your managers name?',
        name: 'getName',
      },
      {
        type: 'input',
        message: 'What is your manager ID?',
        name: 'getId',
      },
      {
        type: 'input',
        message: 'What is your managers mail address?',
        name: 'getRole',
      },
      {
          type: 'input',
          message: 'What is you manager office number?',
          name: 'getofficeNumber',
        },
    ])


  .then((answers ) => {
    // then  creat and store an  object for the manager
    const { name, id, email, officeNumber} = answers

    const manager = new Manager (name, id , email, officeNumber);

    employee.push(new Manager( answer.managerName, answer.managerId, answer.managerEmail, answer.managerofficeNumber) );

    // then "ask what they would like to do next "

    // askForNextAction ();
    // inquirer
    // .prompt([
    //   {
    //     type: 'list',
    //     message: 'who would you like to add?',
    //     choices: ['add a manager', 'add an engineer', 'add an intern', 'complete team']

    //   }
    // ])
    // .then(answers => {
    //   const {next} = answers:

    // })

  fs.writeFile( 
    'index.html', teamTemplate,(answers),
 (err) => {
 err ? console.error(err) : console.log('Generating HTML...');
    } )

  });
