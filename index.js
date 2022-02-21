const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const render = require('./lib/template');
const Employee = require ('./lib/Employee')
const Manager = require ('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require ('./lib/Intern');
const { resolve } = require('path');
const employees = [];

// const employee = [];

// actions needed - all seperate fxn

// ask them for manager info
async function start() {


function askForManagerInfo() {

  // prompt the user for the data
  inquirer.prompt([
  
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
        name: 'getEmail',
      },
      {
          type: 'input',
          message: 'What is you manager office number?',
          name: 'getofficeNumber',
        },
    ])
  .then((answers) => {
    // then  create and store an  object for the manager
    employees.push(new Manager(answers.getName, answers.getId, answers.getEmail, answers.getofficeNumber)) 
    askForNextAction();
  });
}

  // then "ask what they would like to do next "

  function askForNextAction () {
    return inquirer
    .prompt([
      {  
        type: 'list',
        name : 'next',
        message: 'What would you like to do next?',
        choices: ['add an engineer', 'add an intern', 'complete team']
    
      }
    ])
    .then(res => {
      switch(res.next) {
        case 'add an engineer':
          askForEngineerInfo();
          break;
        case 'add an intern':
          askForInternInfo();
          break;
        default:
          buildHtml()
      }
    })
  }
  
function askForEngineerInfo() {

  // prompt the user for the data
  return inquirer
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
        name: 'getEmail',
      },
      {
          type: 'input',
          message: 'What is you engineers GitHub?',
          name: 'getGithub',
        },
    ])
  .then((answers) => {
    // then  create and store an  object for the manager
    employees.push(new Engineer(answers.getName, answers.getId, answers.getEmail, answers.getGithub) ) 
    console.log(employees)
    askForNextAction();
  });
}

function askForInternInfo() {

  // prompt the user for the data
  return inquirer
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
        name: 'getEmail',
      },
      {
          type: 'input',
          message: 'What school does your intern go to?',
          name: 'getSchool',
        },
    ])
  .then((answers) => {
    // then  create and store an  object for the manager
    employees.push(new Intern( answers.getName, answers.getId, answers.getEmail, answers.getSchool) ) 
    console.log(employees)
    askForNextAction();
  });
}

function buildHtml() {
  if(!fs.existsSync(path.resolve(__dirname), 'output')) {
    fs.mkdirSync(path.resolve(__dirname), 'outut')
  }
  fs.writeFileSync(path.join(path.resolve(__dirname, 'output'), 'team.html'), render(employees), 'utf-8')
}

await askForManagerInfo();
};


start();


  
    // .then(answers  => {
    //   const {next} = answers;
    //   if( next === 'add an engineer') {

    //     function askForEngineerInfo(){
    //     inquirer
    //     .prompt([
    //       {
    //         type: 'input',
    //         message: 'What is your engineers name?',
    //         name: 'getName',
    //       },
    //       {
    //         type: 'input',
    //         message: 'What is your engineers ID?',
    //         name: 'getId',
    //       },
    //       {
    //         type: 'input',
    //         message: 'What is your engineers email address?',
    //         name: 'getRole',
    //       },
    //       {
    //           type: 'input',
    //           message: 'What is you engineers github?',
    //           name: 'getGithub',
    //         },
    //     ])
      
      
      
    //   .then((answers ) => {
    //     // then  creat and store an  object for the manager
    //     employee.push(new engineer( answers.getName, answers.getId, answers.getEmail, answers.getGithub))
    //   });
    // }
    
    
        // then "ask what they would like to do next "
    
      // function 
      //   inquirer
      //   .prompt([
      //     {
      //       type: 'list',
      //       message: 'What would you like to do next?',
      //       choices: ['add a manager', 'add an engineer', 'add an intern', 'complete team']
      //     }
      //   ])

      //   .then(answers => {
      //     const {next} = answers;
          
      //     function askForInternInfo ()
      //     if( next === 'add an intern') {
      //       inquirer
      //       .prompt([
      //         {
      //           type: 'input',
      //           message: 'What is your interns name?',
      //           name: 'getName',
      //         },
      //         {
      //           type: 'input',
      //           message: 'What is your interns ID?',
      //           name: 'getId',
      //         },
      //         {
      //           type: 'input',
      //           message: 'What is your interns email address?',
      //           name: 'getRole',
      //         },
      //         {
      //             type: 'input',
      //             message: 'What is you interns school?',
      //             name: 'getGithub',
      //           },
      //       ])

      //     // } else if (next === 'add engineer') {
      //     //   addEngineer();
      //     // } else if (next === 'complete team'){
      //     //  generateHtml()
      //     // };
          
      //     .then((answers ) => {
      //       // then  creat and store an  object for the manager
      //       employee.push(new engineer( answers.getName, answers.getId, answers.getEmail, answers.getSchool) );
        
            // then "ask what they would like to do next "
        
      //       function askForNextAction (){
      //       inquirer
      //       .prompt([
      //         {
      //           type: 'list',
      //           message: 'What would you like to do next?',
      //           choices: ['add a manager', 'add an engineer', 'add an intern', 'complete team']
            
      //         }
      //       ]);
      //     })
      //   }
      // }
    
        
        
      //   );

//   fs.writeFile( 
//     'index.html', teamTemplate,(answers),
//  (err) => {
//  err ? console.error(err) : console.log('Generating HTML...');
//     } )
    
//   })
// }
//     })
