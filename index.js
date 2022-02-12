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
        message: 'What is your managers email address?',
        name: 'getRole',
      },
      {
          type: 'input',
          message: 'What is you manager office number?',
          name: 'getofficeNumber',
        },
    ])
  


  .then(answers  => {
    // then  creat and store an  object for the manager
    employee.push(new manager( answers.getName, answers.getId, answers.getEmail, answers.getofficeNumber) );

    // then "ask what they would like to do next "

    // askForNextAction ()
    inquirer
    .prompt([
      {  
        name : 'next',
        type: 'list',
        message: 'What would you like to do next?',
        choices: ['add a manager', 'add an engineer', 'add an intern', 'complete team']
    
      },
    ])
    .then(answers  => {
      const {next} = answers;
      if( next === 'add an engineer') {
        inquirer
        .prompt([
          {
            type: 'input',
            message: 'What is your engineers name?',
            name: 'getName',
          },
          {
            type: 'input',
            message: 'What is your engineers ID?',
            name: 'getId',
          },
          {
            type: 'input',
            message: 'What is your engineers email address?',
            name: 'getRole',
          },
          {
              type: 'input',
              message: 'What is you engineers github?',
              name: 'getGithub',
            },
        ])
      
      
      .then((answers ) => {
        // then  creat and store an  object for the manager
        employee.push(new engineer( answers.getName, answers.getId, answers.getEmail, answers.getGithub) );
    
        // then "ask what they would like to do next "
    
        // askForNextAction ()
        inquirer
        .prompt([
          {
            type: 'list',
            message: 'What would you like to do next?',
            choices: ['add a manager', 'add an engineer', 'add an intern', 'complete team']
          }
        ])

        .then(answers => {
          const {next} = answers;
          if( next === 'add an intern') {
            inquirer
            .prompt([
              {
                type: 'input',
                message: 'What is your interns name?',
                name: 'getName',
              },
              {
                type: 'input',
                message: 'What is your interns ID?',
                name: 'getId',
              },
              {
                type: 'input',
                message: 'What is your interns email address?',
                name: 'getRole',
              },
              {
                  type: 'input',
                  message: 'What is you interns school?',
                  name: 'getGithub',
                },
            ])
          
          .then((answers ) => {
            // then  creat and store an  object for the manager
            employee.push(new engineer( answers.getName, answers.getId, answers.getEmail, answers.getSchool) );
        
            // then "ask what they would like to do next "
        
            // askForNextAction ()
            inquirer
            .prompt([
              {
                type: 'list',
                message: 'What would you like to do next?',
                choices: ['add a manager', 'add an engineer', 'add an intern', 'complete team']
            
              }
            ]);
          })
        }
      }
    
        
        
        );

  fs.writeFile( 
    'index.html', teamTemplate,(answers),
 (err) => {
 err ? console.error(err) : console.log('Generating HTML...');
    } )
  })
}
    });
