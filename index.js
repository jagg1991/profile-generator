// adding reqired  files for user input
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
// const generateMarkdown = require('generate.js')

//importing object class

const Manager = require("./lib/manager");
const Intern = require("./lib/intern");
const Engineer = require("./lib/engineer");
const generateEmployee = require('./src/generateEmployee');
const generateHTML = require('./src/generate')

//empty array for the employees 
const employeeMembers = [];


//function for user input
const userInput = () => {
    inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "What is the name of your employee?"
            },
            {
                type: "number",
                name: "id",
                message: "What is your employees ID number?"
            },
            {
                type: "input",
                name: "email",
                message: "What is your employees email address?"
            },

            {
                type: 'list',
                name: 'role',
                message: 'What is the role of the employee?',
                choices: ['Manager', 'Engineer', 'Intern'],
            },



        ])

        .then((answers) => {
            const { name, id, email, role } = answers;


            switch (role) {
                case "Manager":
                    inquirer.prompt({
                        type: "number",
                        name: "office",
                        message: "What office number does your manager work for?"
                    })



                        .then((manager) => {
                            const { office } = manager;
                            // console.log(office);
                            const managerEmp = new Manager(name, id, email, office);
                            employeeMembers.push(managerEmp);
                            console.log(managerEmp)
                            userAsk();
                        })

                    break;
                case "Engineer":
                    inquirer.prompt({
                        type: "input",
                        name: "github",
                        message: "What is you GitHub username?"

                    })
                        .then((userName) => {
                            const { github } = userName;
                            const engineerEmp = new Engineer(name, id, email, github);
                            employeeMembers.push(engineerEmp);
                            userAsk();
                        })
                    break;
                case "Intern":
                    inquirer.prompt({
                        type: "input",
                        name: "schoolName",
                        message: "What school does your intern attend?"

                    })
                        .then((attend) => {
                            const { schoolName } = attend;
                            const internEmp = new Intern(name, id, email, schoolName);
                            employeeMembers.push(internEmp);
                            userAsk();
                            // console.log(internEmp)
                        })
                    break;
                default:
                    break;

            }

        })


}

const userAsk = () => {
    inquirer.prompt({

        type: "list",
        name: "continue",
        message: "Would you like to add another employee?",
        choices: ["Yes", "No"]

    })
        .then((answer) => {
            if (answer.continue === 'Yes') {
                userInput();
            }
            else {
                getEmployee();
                // init(answer)
                console.log("generate HTML File");
            }
        })
}

const init = (employeeAnswers) => {

    const writeHTML = util.promisify(fs.writeFile);
    writeHTML(`index.html`, generateHTML(employeeAnswers))

        .then(() => console.log('Successfully wrote index.html file!'))
        .catch((err) => console.log(err));
}



const getEmployee = () => {
    const employeeAnswers = {
        manCards: '',
        engCards: '',
        intCards: '',
    };
    console.log(employeeMembers);
    for (let i = 0; i < employeeMembers.length; i++) {
        let employees = generateEmployee(employeeMembers[i]);


        switch (employeeMembers[i].getRole()) {
            case 'Manager':

                employeeAnswers.manCards += employees;
                break;
            case 'Engineer':
                employeeAnswers.engCards += employees;
                break;
            case 'Intern':
                employeeAnswers.intCards += employees;
                break;
            default:
                break;
        }

    }
    console.log(employeeAnswers)
    init(employeeAnswers);

}

userInput();