const Employee = require("./employee");

class Engineer extends Employee {


}
function askForManagerInfor (){

    // prompt the user for the data
    inquirer
    .prompt(questions)
    .then((answers ) => {
      // then  creat and store an  opbject for the manager
      employee.push(new Manager( answer.manager,) );
  
      // then "ask what they would like to do next "
      askForNextAction ();
  
  
    })
  
  }
module.exports = Engineer