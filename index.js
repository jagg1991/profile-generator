// adding reqired  files for user input
const inquirer = require('inquirer');
const fs = require('fs');
// const generateMarkdown = require('generate.js')

//importing object class

const Manager = require("./lib/manager");
const Intern = require("./lib/intern");
const Engineer = require("./lib/engineer");

let employeeMembers = [];

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
            // {
            //     type: "number",
            //     name: "office",
            //     message: "What office number does your employee work for?"
            // },
            {
                type: 'list',
                name: 'role',
                message: 'What is the role of the employee?',
                choices: ['Manager', 'Engineer', 'Intern'],
            },

            // {
            //     type: "list",
            //     name: "continue",
            //     message: "Would you like to add another employee?",
            //     choices: ["Yes", "No"]
            // }

        ])

        .then((data) => {
            const { name, id, email, role } = data
            // const engineer = new Engineer(name, id, email, office, role)
            // const manager = new Manager(name, id, email, office, role)
            // const intern = new Intern(name, id, email, office, role)

            // employeeMembers.push(engineer, manager, intern)
            // console.log(name, id, email, office, role)
            switch (role) {
                case "Manager":
                    inquirer.prompt({
                        type: "number",
                        name: "office",
                        message: "What office number does your employee work for?"
                    })
                        .then((manager) => {
                            const { office } = manager;
                            const managerEmp = new Manager(name, id, email, office);
                            employeeMembers.push(managerEmp);
                            console.log(employeeMembers);
                            userAsk();
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
                console.log("generate HTML File");
            }
        })
}


userInput();


