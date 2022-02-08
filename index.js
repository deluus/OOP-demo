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
// async function askForManagerInfor() {

  // promt the user for data
  // const answer = await inquirer.prompt( questions)

  // then create and store and boject for the manager
//   emmployee.push(new Manager(*data from inquirer*));
// }

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

    const { firstName , id , emial, officeNumber} = answers

    const manager = 
  



  fs.writeFile( 
    'index.html', teamTemplate,(answers),
 (err) => {
 err ? console.error(err) : console.log('Generating README...');
 } )

  });
