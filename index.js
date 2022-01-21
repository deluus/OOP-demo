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
  .prompt()
  .then((answers ) => {
    // then  creat and store an  opbject for the manager
    employee.push(new Manager( *pass in the data from inquirer*) );

    // then "ask what they would like to do next "
    asForNextAction ();


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
      message: 'What is your project title?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'What was your motivation?',
      name: 'motivation',
    },
    {
      type: 'input',
      message: 'why did you build this project?',
      name: 'project',
    },
    {
        type: 'input',
        message: 'what problems did it solve?',
        name: 'solve',
      },
      {
      type: 'input',
      message: 'what did you learn?',
      name: 'learn'
    },
    {
        type: 'input',
        message: 'what are the necessary dependencies you need to install?',
        name: 'install',
        choices : [ "inquirer", "badmath"]
      },
      {
        type: 'input',
        message: 'GitHub username',
        name: 'username'
      },
      {
        type: 'input',
        message: 'Email address',
        name: 'address'
      },
  ])

  .then((answers) => {

    const { firstName , id , emial, officeNumber} = answers

    const manager = 
  



  fs.writeFile( 
    'index.html', readMeTemplate,(answers),
 (err) => {
 err ? console.error(err) : console.log('Generating README...');
 } )

  });
